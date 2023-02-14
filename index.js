const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());


app.post('/', (req, res) => {
    const data = req.body;
    console.log('Data:', data, );

    tip = (data.percent / 100) * data.amount;
    console.log(tip);
    totalBill = data.amount + tip;  
    console.log(totalBill);

    tipPerPerson = (tip / data.num_people).toFixed(2);
    totalPerPerson = (totalBill / data.num_people).toFixed(2); 
    
    const responseData = {
        message: "Data received successfully!",
        data: {
            total: totalPerPerson,
            tip: tipPerPerson
        }
    }
    
    res.status(200).json(responseData);
});

app.listen(port, () => {
    console.log(`Server online at http://localhost:${port}`)
})