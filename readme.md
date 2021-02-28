# Install dependencies
```shell
npm install
```

# Install PostgresSQL

**On Windows using chocolatey**
```bash
cinst postgresql12 --params '/Password:postgres' -y
```

## Active Postgres
**Open the command prompt with administrator privilege and navigate to the installation folder**
```bash
cd "C:\Program Files\PostgreSQL\12\bin\"
```

**Start Postgres with the command below**
```bash
.\pg_ctl.exe -D "C:\Program Files\PostgreSQL\12\data" start
```

**Shutting down Postgres**
```bash
.\pg_ctl.exe -D "C:\Program Files\PostgreSQL\12\data" stop
```

# Start the server
```bash
npm start
```