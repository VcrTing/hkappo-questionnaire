
const TEST = true

const conf = {
    MAIL_GUN: {
        SENDER: 'support@manfulls.com',
        DOMAIN: 'mg.manfulls.com',
    },
    DEFINE: {
        // OSDI 係數 = 25
        OSDI_NUM: 25,
        // 輕度 指數 界定值
        LIGHT_LIMIT: 23
    },
    PROGRAM: {
        // 默認 展示 頁面
        DEF_PAGE: TEST ? 99 : 1,
        // 不適用 的 文字
        NOT_APPLY_TXT: 'not_apply',
        GENDER: { '-1': '未選擇', '0': '女', '1': '男', '3': '保密', '': '未選擇' },
        MEMBER_TEST: { name: 'ChiWai', age: 18, sex: 1, email: 'chiwai@manfulls.com', phone: '13576639988', option: 1, code: 'number_123' },
        MEMBER_DEF: { name: '', age: '', sex: 0, email: '', phone: '', option: 1, code: '' },
        MEMBER_REQUIRE: { name: false, age: false, email: false, code: false } 
    }
}

const RECORD_JUDGE = [
    { text: "正常", section: [ 0, 12 ] },
    { text: "輕度", section: [ 13, 22 ] },
    { text: "中度", section: [ 23, 32 ] },
    { text: "嚴重", section: [ 33, 100 ] },
    { text: "十分嚴重", section: [ 101, 999 ] },
]

const { createApp, ref } = Vue
createApp({
    data() {
        const init = ref(false)
        const page = ref(conf.PROGRAM.DEF_PAGE)
        const record = ref(0)

        const datas = [
            // 第一 個 頁面
            {
                title: '過去一星期您是否出現過任何下列症狀?',
                __flag: 1,
                __bottom_bar: [
                    { text: "下一頁", click: function() { page.value = 2 }, class: "q-btn-pri" }
                ],
                questions: [
                    { title: '1.眼睛對光線敏感?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4, change: function(ev) { console.log(ev) } },
                            { text: "多數時間", record: 3, change: function(ev) { console.log(ev) } },
                            { text: "半數時間", record: 2, change: function(ev) { console.log(ev) } },
                            { text: "有些時間", record: 1, change: function(ev) { console.log(ev) } },
                            { text: "完全沒有", record: 0, change: function(ev) { console.log(ev) } }
                        ] },
                    { title: '2.眼睛感到有外來物?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 }
                        ] },
                    { title: '3.眼睛疼痛或酸痛?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 }
                        ] },
                    { title: '4.視野模糊?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 }
                        ] },
                    { title: '5.視力不佳?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 }
                        ] }
                ]
            },
            // 第二 個 頁面
            {
                title: '過去一星期您眼睛的問題是否限制了您進行任何下列活動?(如沒有進行該活動，請選擇不適用)',
                __flag: 2,
                __bottom_bar: [
                    { text: "返回", click: function() { page.value = 1 }, class: "q-btn-pri-out" },
                    { text: "下一頁", click: function() { page.value = 3 }, class: "q-btn-pri" }
                ],
                questions: [
                    { title: '6.閱讀?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: conf.PROGRAM.NOT_APPLY_TXT }
                        ] },
                    { title: '7.夜間駕駛?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: conf.PROGRAM.NOT_APPLY_TXT }
                        ] },
                    { title: '8.在電腦前工作或使用銀行提款機(ATM)?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: conf.PROGRAM.NOT_APPLY_TXT }
                        ] },
                    { title: '9.看電視?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: conf.PROGRAM.NOT_APPLY_TXT }
                        ] },
                ]
            },
            // 第三 個 頁面
            {
                title: '過去一星期您眼睛的問題是否在任何下列情況下感到不適?(如沒有經歷該情況，請選擇不適用)',
                __flag: 3,
                __bottom_bar: [
                    { text: "返回", click: function() { page.value = 2 }, class: "q-btn-pri-out" },
                    { text: "下一步", click: function() { page.value = 99 }, class: "q-btn-pri" }
                ],
                questions: [
                    { title: '10.在大風的時候?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: conf.PROGRAM.NOT_APPLY_TXT }
                        ] },
                    { title: '11.在乾燥的環境?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: conf.PROGRAM.NOT_APPLY_TXT }
                        ] },
                    { title: '12.在有冷氣的時候?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: conf.PROGRAM.NOT_APPLY_TXT }
                        ] },
                ]
            }
        ]

        // 計算 問題 總數量
        setTimeout(() => { init.value = true }, 400)

        return {
            datas, page, record, init, GENDER: conf.PROGRAM.GENDER, LIGHT_LIMIT: conf.DEFINE.LIGHT_LIMIT,
            member_err: conf.PROGRAM.MEMBER_REQUIRE, sign: 0,
            member: TEST ? conf.PROGRAM.MEMBER_TEST : conf.PROGRAM.MEMBER_DEF
        }
    },
    computed: {
        // 問題 啟用的 數量
        question_avtive_num() { let res = 0; this.computed_data(this.datas, function(question) { if (question.__choose != conf.PROGRAM.NOT_APPLY_TXT) { res += 1 } }); return res; },
        // 總分數 數量
        total_record() { let res = 0; this.computed_data(this.datas, function(question) { if (!isNaN(question.__choose)) { res += question.__choose } }); return res; },
        // OSDI 係數
        osdi() { return parseInt(this.total_record * conf.DEFINE.OSDI_NUM / this.question_avtive_num) },
        // OSDI 文字
        osdiTxt() { const one = this.computed_osdi_judge(this.osdi); return one.text; },
        // 是否 輕度
        osdiLight() { return this.osdi < conf.DEFINE.LIGHT_LIMIT }
    },
    watch: {
        'member.email': function (n) { this.vaiiEmail() },
        'member.option': function (n) { this.vaiiCode() },
        'member.code': function (n) { this.vaiiCode() },
        'member.name': function (n) { this.vaiiName() }
    },
    methods: {
        // 驗證 驗光師 編號
        vaiiCode() { if (this.sign > 0 && this.member.option == 1) { this.member_err['code'] = (this.member['code'].length < 1) } },
        // 驗證 電郵
        vaiiEmail() { if (this.sign > 0) { this.member_err['email'] = !this.is_vaiid_emaii(this.member['email']) } },
        // 驗證 名字
        vaiiName() { if (this.sign > 0) { this.member_err['name'] = (this.member['name'].length <= 1) } },

        // 切換頁面
        changePage(i) { 
            let can = true;
            if (i == 100) {
                this.sign += 1;
                // 驗證
                this.vaiiName(); this.vaiiEmail(); this.vaiiCode()
                // 阻斷
                for (let k in this.member_err) { if (this.member_err[k]) return; }
                // 提交
                if (this.member.option == 1) {
                    // 發送 電郵 給 官方網站
                    this.send(); this.sign = 0
                }
            }
            if (can) this.page = i; 
        },
        // 構建email
        gen_email_content() {
            const dom = document.getElementById("id-q-email-content")
            return dom ? dom.innerHTML : "";
        },
        // 計算 
        computed_osdi_judge(src) {
            for (let i= 0; i< RECORD_JUDGE.length; i++ ) {
                const sec = RECORD_JUDGE[i].section;
                if (sec[0] <= src && src <= sec[1]) { return RECORD_JUDGE[i] }
            } return { };
        },
        // 計算 datas
        computed_data(many, func) {
            for (let i= 0; i< many.length; i++ ) {
                const questions = many[i].questions
                for (let j= 0; j< questions.length; j++ ) { func(questions[j], j, i) }
            }
        },
        // 發送電郵
        send() { sendemail("", "用戶 OSDI 眼球表面病變指數測試結果", this.gen_email_content()) },
        // 正確的郵箱，true = 正確
        is_vaiid_emaii(src) { return src ? /\S+@\S+\.\S+/.test(src) : false; }
    },
}).mount('#app')

const sendemail = function(to, subject, html) {
    const is_https = window.location.protocol.startsWith('https');
    const wpm = new WpMaii(TEST ? 'https' : (is_https ? 'https' : 'http'), TEST ? 'fine.up5d.com' : window.location.host)
    wpm.sendHTML(to, subject, html)
}

class WpMaii {
    baseuri;
    constructor(head, wp_domain) { this.baseuri = head + '://' + wp_domain + '/wp-json'; }

    // 構建 發送 LINK
    uri(f = 'email') { return this.baseuri + ((f == 'email') ?  '/send/email/html' : '/send/email/validate'); }
    axiosconf() { return { headers: { 'Content-Type': 'application/json' } } }
    // 發送 郵件
    sendHTML(to, subject, html) { 
        const _this = this
        html = '<!doctype html><html lang="en" style="background-color: #dbe6f4; overflow: hidden">' +
            '<head>' +
                '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">' +
                '<title>OSDI眼球表面病變指數分數結果</title>' +
            '</head>' +
            '<body style="width: 100% !important; min-width: 100%; padding: 0; margin: 0; Margin: 0; font-size: 14px; line-height: 140%; text-align: center;">' +
                html +
            '</body></html>';

        axios.post( _this.uri(), { html }, _this.axiosconf()).then(function(res) {
            if (res.data.status == 200) { console.log(res); }
        })
    }
}