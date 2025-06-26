const express=require('express');
const cors=require('cors');
const {checkWin ,checkDraw}=require('./logic/gameLogic');
 

const app=express();
const PORT = 3000; 
 app.use(cors());
 app.use(express.json());


 app.post('/api/check',(req,res)=>{
  const{grid,currentPlayer}=req.body;
  const Win=checkWin(grid,currentPlayer);
  const draw=checkDraw(grid);
  res.json({win,draw});
 });

 app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);
 });
