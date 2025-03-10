const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors'); // 引入 cors

// 使用 cors 中介軟體
app.use(cors()); // 允許所有來源的請求

// 資料庫連線設定
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpass',
    database: 'lab_b310'
});

// 連接資料庫
connection.connect((err) => {
    if (err) {
        console.error('資料庫連線錯誤:', err);
        return;
    }
    console.log('資料庫連線成功');
});

// 取得過去七天的預約資料
app.get('/reservations', (req, res) => {
    const query = 'SELECT * FROM Reservations WHERE create_time > NOW() - INTERVAL 7 DAY';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('資料庫查詢錯誤:', err);
            return res.status(500).json({ error: '資料庫查詢錯誤' });
        }

        res.json(results); // 回傳 JSON 資料
    });
});

// 啟動伺服器
app.listen(3000, () => {
    console.log('伺服器啟動於 http://localhost:3000');
});