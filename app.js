import express from 'express';
import cors from 'cors';
const servidor = express();
servidor.use(express.json());
servidor.use(cors());


servidor.get('/helloword', (req, resp)=>{
    //bom dia
    resp.send('reloooo');
    
})

servidor.get('/mensagem/boa', (req,resp)=> {
    resp.send('BEM VINDO')
})

servidor.get('/calculadora/:n1/:n2', (req,resp)=> {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1+n2;

    resp.send({
        soma:soma
    })

})

servidor.get('/calculadora/somae2', (req,resp)=> {
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let soma = n1+n2;

    resp.send('a soma é'+ soma)

})

servidor.post('/media' ,(req,resp)=>{
    let n1 = req.body.nota1;
    let n2 = req.body.nota2;
    let n3 = req.body.nota3;

    let soma = n1+n2+n2;
    let media = soma/3;
    resp.send('sua nota é' +  media);
  
})

servidor.post('/soma/calcular', (req,resp) =>{
    let n1 = req.body.n1;
    let n2 = req.body.n2;

    let soma = n1+n2;

    resp.send({
        soma: soma
    })
})
servidor.listen(
    400,
    () => console.log('api braba'));
