---
title: Synchronization server
description: Instructions for installing the synchronization server.
footer: false
---

# Synchronization server

Instructions for installing the synchronization server.

## Installation

### Docker

Build image container:

```bash
docker build github.com/TrinityLauncherApp/trinity-syncserver.git -t trinity/syncserver
```

Run container:

```bash
docker run -d -p 8081:8080 \
-e DATABASE_HOST=your_db_host \
-e DATABASE_USER=your_db_user \
-e DATABASE_PASSWORD=your_db_password \
-e DATABASE_NAME=your_db_name \
-e DATABASE_PORT=your_db_port \
-e JWT_SECRET=your_secret \
--restart always \
--name trinity-sync trinity/syncserver
```

### Systemd

Requirements:

- JDK 11+
- Gradle 7.0+

Commands:

```bash
git clone https://github.com/TrinityLauncherApp/trinity-syncserver.git
cd trinity-syncserver && ./gradlew shadowJar
```

Then edit file `trinity-sync.service`, change `replaceme` fields with your values and specify the `trinity-syncserver-0.0.1.jar` file location (it can be found in `build/libs` directory after buliding)

```bash
cp trinity-sync.service /etc/systemd/system
systemctl enable trinity-sync
systemctl daemon-reload
systemctl start trinity-sync
```

For any questions, please, contact us in [Telegram group](https://t.me/trinity-launcherapp) or write an issue, thanks.
