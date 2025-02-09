## sso consumer frontent 

using vite + react + tailwindcss.

To get token from sso service, on sso frontend need to config url of this consumer frontend.

### environment
```
    VITE_APP_NAME: "consumer1"
    VITE_PORT: 4000
    VITE_URL: 'http://localhost:4000'
    VITE_API: 'http://localhost:4001'
    VITE_SSO_APP: 'http://localhost:3000'
```

### run dev on local

```
npm i 
npm run dev
```


### build and start on local

```
npm i 
npm run build
npm run preview 
```

### using docker 
by default, docker compose file config to deploy 2 container at port 4000 and 5000. Please add more if you need.



```
docker compose up -d 
```

### capture 

![Alt text](public/capture.png?raw=true "demo image")