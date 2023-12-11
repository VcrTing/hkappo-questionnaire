class WpMaii {
    baseuri;
    domain;
    validate;
    constructor(head, wp_domain) {
        this.baseuri = head + '://' + wp_domain + '/wp-json';
        this.domain = wp_domain;
    }

    // 構建 發送 LINK
    uri(f = 'email') { return this.baseuri + ((f == 'email') ?  '/send/email/html' : '/send/email/validate'); }
    axiosconf() { return { headers: { 'Content-Type': 'application/json' } } }
    body(html) { return { html } } // { to, name: this.name, from: this.from, subject, html, validate: this.validate }; }

    // 發送 郵件
    sendHTML(to, subject, html) { 
        const _this = this
        axios.post( _this.uri(), _this.body(html), _this.axiosconf()).then(function(res) {
            if (res.data.status == 200) { console.log("成功發射電郵"); }
        })
    }
}