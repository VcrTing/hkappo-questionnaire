<?php 

// 發送 電郵
function send_email($html) {
	
	// 固定的 接受 電郵的 人
	$__q_to = 'vcrting@gmail.com'; 

	// 固定的 發送 電郵的 人
	$__q_sender = 'support@manfulls.com'; 

	// 固定的 發送 電郵的 人 名字
	$__q_sender_name = 'Manfulls'; 

	// 固定的 標題
	$__q_subject = '用戶 OSDI 眼球表面病變指數測試結果'; 
	
	add_filter( 'wp_mail_content_type', array( __CLASS__, 'set_test_html_content_type' ) );
	
	wp_mail($__q_to, $__q_subject, $html, array('X-Mailer-Type:WPMailSMTP/Admin/Pro', 'X-Mailer: MIME-Version: 1.0', 'Content-Type: text/html',  "From: $__q_sender_name <$__q_sender>")); return true;
}

// 發送
function sendMail(WP_REST_Request $request) {
	$res = array( 'status' => 304, 'message' => 'There was an error sending the form.');
	$parameters = $request->get_json_params();
	if (count($_POST) > 0) { $parameters = $_POST; }
	if (send_email($parameters['html'])) {
		$res['status'] = 200;
		$res['message'] = 'Form sent successfully.';
	}
	return json_decode(json_encode($res)); exit();
}

// 註冊 ADMIN
add_action('rest_api_init', function () {
	register_rest_route( 'send/email', '/html', array( 'methods' => 'POST', 'callback' => 'sendMail' ));
});

?>