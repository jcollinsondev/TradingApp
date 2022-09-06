import express from 'express';
import logger from '@/utils/logger';

const port = 3000;

const app = express();

app.listen(port, async () => {
  logger.info(`Application listening at http://localhost:${port}`);
});
