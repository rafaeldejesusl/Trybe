const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');
const btcRouter = require('./router/btcRouter');
const postsRouter = require('./router/postsRouter');
const userRouter = require('./router/userRouter');
const teamsRouter = require('./router/teamsRouter');
const app = express();

app.use(express.json());

app.use('/user',
  userRouter
);

app.use('/btc',
  btcRouter
);

app.use('/posts',
  postsRouter
);

app.use('/teams',
  teamsRouter
)

app.use('*', (req, res, next) => {
  next({ status: 404, message: 'Opsss, route not found!' });
});

app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});
