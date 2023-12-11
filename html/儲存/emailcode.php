<?php

// 發送 電郵
function send_email($html) {
	
	// 固定的 接受 電郵的 人
	$__q_to = 'vcrting@gmail.com'; 

	// 固定的 發送 電郵的 人
	$__q_sender = 'vcrting@163.com'; 

	// 固定的 發送 電郵的 人 名字
	$__q_sender_name = 'Manfulls'; 

	// 固定的 標題
	$__q_subject = '用戶 OSDI 眼球表面病變指數測試結果'; 
	
	// $html = '<!doctype html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width"></head><body>'. $html .'</body></html>';
	
	$html = '<!doctype html>
	<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width">
		<title>WP Mail SMTP Test Email</title>
		<style type="text/css">@media only screen and (max-width: 599px) {table.body .container {width: 95% !important;}.header {padding: 15px 15px 12px 15px !important;}.header img {width: 200px !important;height: auto !important;}.content, .aside {padding: 30px 40px 20px 40px !important;}}</style>
	</head>
	<body style="height: 100% !important; width: 100% !important; min-width: 100%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-font-smoothing: antialiased !important; -moz-osx-font-smoothing: grayscale !important; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #444;  padding: 0; margin: 0; Margin: 0; font-size: 14px; mso-line-height-rule: exactly; line-height: 140%; background-color: #f1f1f1; text-align: center;">
	<table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" class="body" style="border-collapse: collapse; border-spacing: 0; vertical-align: top; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; height: 100% !important; width: 100% !important; min-width: 100%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-font-smoothing: antialiased !important; -moz-osx-font-smoothing: grayscale !important; background-color: #f1f1f1; color: #444;  padding: 0; margin: 0; Margin: 0; text-align: left; font-size: 14px; mso-line-height-rule: exactly; line-height: 140%;">
		<tr style="padding: 0; vertical-align: top; text-align: left;">
			<td align="center" valign="top" class="body-inner wp-mail-smtp" style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #444;  padding: 0; margin: 0; Margin: 0; font-size: 14px; mso-line-height-rule: exactly; line-height: 140%; text-align: center;">
				<!-- Container -->
				<table border="0" cellpadding="0" cellspacing="0" class="container" style="border-collapse: collapse; border-spacing: 0; padding: 0; vertical-align: top; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; width: 600px; margin: 0 auto 30px auto; Margin: 0 auto 30px auto; text-align: inherit;">
					<!-- Header -->
					<tr style="padding: 0; vertical-align: top; text-align: left;">
						<td align="center" valign="middle" class="header" style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #444;  margin: 0; Margin: 0; font-size: 14px; mso-line-height-rule: exactly; line-height: 140%; text-align: center; padding: 30px 30px 22px 30px;">
						</td>
					</tr>
					<!-- Content -->
					<tr style="padding: 0; vertical-align: top; text-align: left;">
						<td align="left" valign="top" style="word-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #444;  margin: 0; Margin: 0; text-align: left; font-size: 14px; mso-line-height-rule: exactly; line-height: 140%; background-color: #ffffff; padding: 0; border-right: 1px solid #ddd; border-bottom: 1px solid #ddd; border-left: 1px solid #ddd; border-top: 3px solid #809eb0;">
							<table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; padding: 0; vertical-align: top; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; Margin: 0; text-align: inherit;">
								<tr style="padding: 0; vertical-align: top; text-align: left;">
									<td class="content" style="padding: 60px 75px 45px 75px;">
										<div class="success" style="text-align: center;">
											<p class="check" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #444;  padding: 0; font-size: 14px; mso-line-height-rule: exactly; line-height: 140%; margin: 0 auto 16px auto; Margin: 0 auto 16px auto; text-align: center;">
											</p>
											<p class="text-extra-large text-center congrats" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #444;  padding: 0; mso-line-height-rule: exactly; line-height: 140%; font-size: 20px; text-align: center; margin: 0 0 20px 0; Margin: 0 0 20px 0;">
												Congrats, test email was sent successfully!
											</p>
											<p class="text-large" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #444;  padding: 0; text-align: left; mso-line-height-rule: exactly; line-height: 140%; margin: 0 0 15px 0; Margin: 0 0 15px 0; font-size: 16px;">
												Thank you for trying out WP Mail SMTP. Were on a mission to make sure that your emails actually get delivered.
											</p>
											<p class="signature" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #444;  padding: 0; font-size: 14px; mso-line-height-rule: exactly; line-height: 140%; text-align: left; margin: 20px 0 0 0; Margin: 20px 0 0 0;">
											</p>
											<p style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; color: #444;  padding: 0; text-align: left; font-size: 14px; mso-line-height-rule: exactly; line-height: 140%; margin: 0 0 15px 0; Margin: 0 0 15px 0;">
												Jared Atchison<br>Co-Founder, WP Mail SMTP
											</p>
										</div>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	</body>
	</html>';

	// add_filter( 'wp_mail_content_type', 'text/html');

	add_filter( 'wp_mail_content_type', array( __CLASS__, 'set_test_html_content_type' ) );
	
	wp_mail($__q_to, $__q_subject, $html, array('X-Mailer-Type:WPMailSMTP/Admin/Test','X-Mailer: MIME-Version: 1.0', 'Content-Type: text/html',  "From: $__q_sender_name <$__q_sender>")); return true;
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