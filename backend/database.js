const mysql = require('mysql2');

// 資料庫連線設定
const connection = mysql.createConnection({
    host: 'localhost',        // 資料庫主機
    user: 'root',             // 資料庫使用者名稱
    password: 'rootpass',     // 資料庫密碼
    database: 'lab_b310',     // 使用的資料庫名稱
});

// 嘗試連線到資料庫
connection.connect((err) => {
    if (err) {
        console.error('資料庫連線失敗: ', err.stack);
        return;
    }
    console.log('資料庫已連線');
});

// 將連線導出，讓其他模組可以使用
module.exports = connection;
