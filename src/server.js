import http from 'node:http';

const port = Number(process.env.PORT || 8787);
const networkConfig = {
  chainId: 56,
  chainName: 'BNB Smart Chain',
  explorer: 'https://bscscan.com',
  usdtContract: '0x55d398326f99059fF775485246999027B3197955'
};

const json = (response, status, body) => {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store'
  });
  response.end(JSON.stringify(body));
};

http.createServer((request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS' });
    return response.end();
  }
  if (request.method === 'GET' && request.url === '/health') return json(response, 200, { status: 'ok', service: 'veepay-backend' });
  if (request.method === 'GET' && request.url === '/api/network-config') return json(response, 200, networkConfig);
  return json(response, 404, { error: 'Route not found' });
}).listen(port, () => console.log(`VEEPAY Wallet backend listening on http://localhost:${port}`));
