
class QiongMaii {
    baseuri;
    domain;
    sender;
    constructor(domain, sender, baseuri = 'https://api.mailgun.net/v3') {
        this.baseuri = baseuri;
        this.domain = domain;
        this.sender = sender;
    }
    uri() { return this.baseuri + '/' + this.domain + '/messages'; }
    axiosconfig(apikey) {
        const Authorization = 'Basic ' + Base64.encode('api:' + apikey); return { headers: { Authorization } }
    }
    body(to, subject, html) {
        const res = { from: this.sender, to, subject, html }
        const form = new FormData()
        for (const k in res) { form.append(k, res[k]) } return form
    }
    /**
     * 简易 发送
     */
    sendHTML(to, subject, html, apikey) {
        const _this = this;
        return new Promise(function (resolve, rej) {
        return axios.post( _this.uri(), _this.body(to, subject, html), _this.axiosconfig(apikey) )
            .then(function (res) {
                console.log("发送电邮的 结果 =", res)
                resolve( (res.status < 399) ? _this.feedback(res.data) : '' );
            })
            .catch(function(err) { rej('') })
        })
    }
    feedback(data) { return data ? data['id'] : ''; }
}
    

var sendemail = function(to, subject, html, key) {
    // const dom = document.getElementById("q-mail-content"); console.log("准备发送 =", dom)
    try {
        const maii = new QiongMaii(conf.MAIL_GUN.DOMAIN, conf.MAIL_GUN.SENDER)
        maii.sendHTML( to, subject, html, key); console.log("准备发送 =", html)
    } catch(err) { }
}