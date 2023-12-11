

const conf = {
    sender: 'support@manfulls.com',
    domain: 'mg.manfulls.com',
    kes: [ 'key-1b', 'bced300', 'c49a2847', '83f3f373', '29f4c17' ]
}

const RECORD_JUDGE = [
    { text: "正常", section: [ 0, 12 ] },
    { text: "輕度", section: [ 13, 22 ] },
    { text: "中度", section: [ 23, 32 ] },
    { text: "嚴重", section: [ 33, 100 ] },
    { text: "十分嚴重", section: [ 101, 999 ] },
]
// 不適用 的 文字，
const NOT_APPLY_TXT = "not_apply";
// OSDI 係數 = 25
const OSDI_NUM = 25

const vv = new Vue({
    el: '#app',
    data() {
        let init = false; let page = 1; let record = 0;
        const datas = [
            // 第一 個 頁面
            {
                title: '過去一星期您是否出現過任何下列症狀?',
                __flag: 1, __next: 2, __prev: 1,
                __bottom_bar: [
                    { text: "下一頁", typed: "next", click: function() { 
                        console.log(page)
                        page = 2 
                        console.log(page)
                    }, class: "q-btn-pri" }
                ],
                questions: [
                    { title: '1.眼睛對光線敏感?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 }
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
                __flag: 2, __next: 3, __prev: 1,
                __bottom_bar: [
                    { text: "返回", typed: "prev", click: function() { page = 1 }, class: "q-btn-pri-out" },
                    { text: "下一頁", typed: "next", click: function() { page = 3 }, class: "q-btn-pri" }
                ],
                questions: [
                    { title: '6.閱讀?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: NOT_APPLY_TXT }
                        ] },
                    { title: '7.夜間駕駛?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: NOT_APPLY_TXT }
                        ] },
                    { title: '8.在電腦前工作或使用銀行提款機(ATM)?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: NOT_APPLY_TXT }
                        ] },
                    { title: '9.看電視?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: NOT_APPLY_TXT }
                        ] },
                ]
            },
            // 第三 個 頁面
            {
                title: '過去一星期您眼睛的問題是否在任何下列情況下感到不適?(如沒有經歷該情況，請選擇不適用)',
                __flag: 3, __next: 99, __prev: 2,
                __bottom_bar: [
                    { text: "返回", typed: "prev", click: function(v) { page = v }, class: "q-btn-pri-out" },
                    { text: "下一步", typed: "next", click: function(v) { page = 99 }, class: "q-btn-pri" }
                ],
                questions: [
                    { title: '10.在大風的時候?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: NOT_APPLY_TXT }
                        ] },
                    { title: '11.在乾燥的環境?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: NOT_APPLY_TXT }
                        ] },
                    { title: '12.在有冷氣的時候?', __choose: 4,
                        answers: [
                            { text: "全部時間", record: 4 },
                            { text: "多數時間", record: 3 },
                            { text: "半數時間", record: 2 },
                            { text: "有些時間", record: 1 },
                            { text: "完全沒有", record: 0 },
                            { text: "不適用", record: NOT_APPLY_TXT }
                        ] },
                ]
            }
        ]

        // 計算 問題 總數量
        setTimeout(() => { init = true }, 400)

        return {
            datas, page, record, init, member: { name: '', age: '', sex: -1, email: '', option: 1 }
        }
    },
    computed: {
        // 問題 啟用的 數量
        question_avtive_num() { 
            let res = 0; 
            for (let i= 0; i< this.datas.length; i++ ) {
                const questions = this.datas[i].questions
                for (let j= 0; j< questions.length; j++ ) { 
                    if (questions[j].__choose != NOT_APPLY_TXT) { res += 1 }
                }
            }
            return res; },
        // 總分數 數量
        total_record() { 
            let res = 0; 
            for (let i= 0; i< this.datas.length; i++ ) {
                const questions = this.datas[i].questions
                for (let j= 0; j< questions.length; j++ ) { 
                    if (!isNaN(questions[j].__choose)) { res += questions[j].__choose }
                }
            }
            return res; },
        // OSDI 係數
        osdi() { return parseFloat(this.total_record * OSDI_NUM / this.question_avtive_num).toFixed(2) },
        // OSDI 文字
        osdiTxt() { 
            let one = { }; const src = this.osdi;
            for (let i= 0; i< RECORD_JUDGE.length; i++ ) {
                const sec = RECORD_JUDGE[i].section;
                if (sec[0] <= src && src <= sec[1]) { one = RECORD_JUDGE[i] }
            } return one.text; }
    },
    methods: {
        // 切換頁面
        changePage(i) { this.page = i; },
        // 發送電郵
        send() {
            const to = this.member.email
            if (to) { sendemail(to, "您的 OSDI 眼球表面病變指數測試結果", conf.kes.join("")) }
        },
        // 下一步
        btn_click(typed, perv, next) { this.page = (typed == 'next') ? next : perv }
    },
})

var sendemail = function(to, subject, key) {
    const dom = document.getElementById("q-mail-content"); console.log("准备发送 =", dom)
    try {
        const maii = new QiongMaii(conf.domain, conf.sender)
        maii.sendHTML( to, subject, dom.outerHTML, key)
    } catch(err) { }
}