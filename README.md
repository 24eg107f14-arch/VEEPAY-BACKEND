# Backend - VEEPAY Wallet

This folder contains the Node.js backend boundary. Its source code is in `src/server.js`; it provides only public, non-sensitive configuration and a health endpoint.

## Routes

- `GET /health` - confirms that the service is running.
- `GET /api/network-config` - returns public BNB Smart Chain configuration.

## Start

```powershell
npm.cmd install
npm.cmd run dev
```

It runs at `http://localhost:8787` by default.

## Important security rule

This backend must never receive, log, save, or transmit a recovery phrase, private key, local wallet password, or biometric data. Wallet signing remains in the frontend/device.
