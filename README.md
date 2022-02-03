# dataland-workshop

> Workshop frontend for the Dataland project

## About

This is the workshop frontend code for the DataLand project. 

## Getting Started

### Development

You can use [Vagrant](https://www.vagrantup.com/) to run and develop the code in this project.

1. Download and install [Vagrant](https://www.vagrantup.com/)
2. Install [Virtualbox](https://www.virtualbox.org/) or [libvirt](https://libvirt.org/)
3. Make sure that you populate the `.env` file correctly. `.env.sample` is a starting point and should
   work out of the box.
    ```
    cd path/to/dataland-workshop
    cp .env.sample .env
    ```
3. Provision and start the Vagrant environment
    ```
    vagrant up
    ```
4. Once the Vagrant environment is up and running, you should be able to access the system through
   your browser at <http://localhost:3000>. The default username is `demo-user` and the password is `secret`.


**Note:** To ensure that local code changes show up in the Vagrant enviornment, you will have the run the command
`vagrant rsync-auto`. For more, see the [documentation](https://www.vagrantup.com/docs/cli/rsync-auto) on `rsync-auto`.


### Production

TBD...