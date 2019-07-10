![Roads from Digital Borderlands](https://github.com/f00f-nyc/roads-nodejs/raw/master/sample/public/images/roads.png  "Roads") 
# Roads

This is the sample Node JS project which will be deployed by Roads. A simple, straight-forward Node project which you can use as a spring board to work on your own website.

## About This Repository

The options chosen at checkout will determine which branch will be chosen to be deployed.  For example, if you choose to install Postgres and Gogs, that will select `micro/postgres-gogs` and deploy that to the webroot. Each branch has relevant information on the options chosen.

## About Roads

Roads is a one-time, system setup for your cloud service. It can be an intensive process to do the initial set up for a machine, so you may have Roads set it up with a database, private git hosting,  automatic deployments from that private git host, and SSL with Let's Encrypt. 

If you've done that, you only need to clone your private repository and start hacking away! Once you push to it, deployments will happen automatically.

If you want to get into the details of what was deployed, passwords, and locations, please decrypt `/opt/lib/roads/README.gpg` with your job id.
