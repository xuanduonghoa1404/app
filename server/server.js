'use strict';

const Koa = require('koa');
const Router = require('@koa/router');
const fs = require('fs');
var cors = require('koajs-cors');
const bodyParser = require('koa-bodyparser');
// const log = require('./routes/log');
// import logRouter from './routes/log';
const app = new Koa();
const router = new Router({prefix: '/auth'});
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(bodyParser());
router.get('/', async (ctx) => {
    console.log(ctx.param);
    // utf8 is required, without it fs.readFileSync will return you a buffer
    let data = fs.readFileSync('./data/user.json', 'utf8')
    ctx.body = JSON.parse(data);
})
    .post('/', async (ctx, next) => {
        // handle your post request here
        console.log(ctx.request);
        console.log(ctx.request.body, ctx.request.body["username"], ctx.request.body["password"]);
        let username = ctx.request.body["username"];
        let password = ctx.request.body["password"];
        let data = fs.readFileSync('./data/user.json', 'utf8')
        let user = JSON.parse(data);
        user.forEach((e) => {
            if (e.username === username && e.password === password) {
                ctx.body = e;
            }
        })
    })

const logRouter = new Router({prefix: '/log'});
logRouter.get('/', '/', (ctx) => {
    let data = fs.readFileSync('./data/log.json', 'utf8')
    ctx.body = JSON.parse(data);
});
const deviceRouter = new Router({prefix: '/device'});
deviceRouter.get('/', '/', (ctx) => {
    let data = fs.readFileSync('./data/device.json', 'utf8')
    ctx.body = JSON.parse(data);
})
    .post('/', async (ctx, next) => {
        // handle your post request here
        try {
            let date_ob = new Date();
            let day = ("0" + date_ob.getDate()).slice(-2);
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            let year = date_ob.getFullYear();
            let name = ctx.request.body["name"];
            let mac = ctx.request.body["mac"];
            let ip = ctx.request.body["ip"];
            let date = day + "-" + month + "-" + year;
            let power = ctx.request.body["power"];
            let device = {
                name: name,
                mac: mac,
                ip: ip,
                date: date,
                power: power
            }
            let data = fs.readFileSync('./data/device.json', 'utf8')
            let dataJSON = JSON.parse(data);
            dataJSON.push(device);
            fs.writeFileSync('./data/device.json', JSON.stringify(dataJSON))
        } catch (e) {
            console.log("Error update data");
        }

    })
;

app.use(logRouter.routes())
    .use(logRouter.allowedMethods());
app.use(deviceRouter.routes())
    .use(deviceRouter.allowedMethods());
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3002);