---
sidebar_position: 3
hide_title: true
---

## Preparation

✅A Ubuntu 20.04.2 server for supOS<br/>
✅A USB dongle with authorization file<br/>

## Install and configure Ubuntu Server

### Installing Server

1. Get [Ubuntu 20.04.2 Server iso](http://old-releases.ubuntu.com/releases/20.04.2/ubuntu-20.04.2-live-server-amd64.iso)

2. Proceed installation and create 3 logical volumes for mount points.

<table>
        <tr>
            <th>Mount Point</th>
            <th>Minimum Disk Size</th>
            <th>Recommended Disk Size</th>
            <th>Function</th>
            <th>Mount Name</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>/volumes</td>
            <td>200 G</td>
            <td>1200 G</td>
            <td>supOS system data storage</td>
            <td>lv00</td>
            <td>If data volume is large, increase the disk mount size.</td>
        </tr>
        <tr>
            <td>/home/supos/supos</td>
            <td>100 G</td>
            <td>200 G</td>
            <td>supOS installation package</td>
            <td>lv01</td>
            <td>-</td>
        </tr>
        <tr>
            <td>/backup</td>
            <td>200 G</td>
            <td>200 G</td>
            <td>Backup file storage path</td>
            <td>lv02</td>
            <td>Adjust the disk size based on actual backup file size.</td>
        </tr>
    </table>

![Ubuntu LVM](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/ubuntu_LVM.png)

### Configuring Server

1. Enable root account

    1. Open SSH configuration file.

      `sudo vi /etc/ssh/sshd_config`

      ![Ubuntu LVM](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/60.png)

    2. Press ESC to exit editing and then enter `:wq` to save the file.

    3. Restart the service.

      `service sshd restart`
    
    4. Set the password of the root account.
      
      `sudo passwd`

    5. Switch to root account.

      ` sudo su`

2. Modify time zone and server time.

:::info
Configure time zone accordingly.
:::

<ol>
<ol>
<li>Copy time zone file.</li>

`cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime`

<li>Use <code>date</code> command to check the current time and time zone.</li>
<li>(optional) Set date and time.</li>

- Set date: `date -s 06/03/2019`

- Set time: `date -s 17:55:54`

<li>Write system time to hardware.</li>

`hwclock -w`

<li>Check whether the system time (<code>date</code>) matches the hardware time (<code>hwclock</code>).</li>
</ol>
</ol>

3. Turn off the swap partition of the server

<ol>
<ol>
<li>Execute <code>swapoff /swap.img</code> to turn off swap.</li>
<li>Execute <code>free -h</code> to check whether the swap partition is successfully turned off.</li>
<img className="medium-zoom-image" src="https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/4.jpg" />


<li>Open the configuration file.</li>

`vi /etc/fstab`

<li>Comment out the line with swap (add a #)</li>

<img className="medium-zoom-image" src="https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/3.jpg" />

<li>Press ESC to exit editing and then enter <code>:wq</code> to save the file.</li>
</ol>
</ol>

3. (optional) Install tools.

  `apt install sysstat net-tools sysbench fio zip`

4. Configure the static DNS.
    
    1. Delete /etc/resolv.conf.
    
      `rm -f /etc/resolv.conf`
    
    2. Open the /etc/resolv.conf file, press i to start editing and add a nameserver.

      `sudo vi /etc/resolv.conf`

      ![Ubuntu LVM](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/1.jpg)

5. Turn off the default firewall.

  `sudo ufw disable`


## Installing supOS Platform

1. Create directories under /home on the server for supOS installation package and the platform.

    - /home/supos/supos/downloads: For the installation package.
    
    - /home/supos/supos/opt/supos: For supOS platform.

2. Copy the installation package to the created directory.

    `cp xxx/supOS-V4.xx.xx.xx-C-xxxxxx.zip /home/supos/supos/downloads`

3. Decompress the package to /home/supos/supos/opt/supos.

    `cd /home/supos/supos/downloads`
    
    `unzip supOS-V4.xx.xx.xx-C-xxxxxx.zip -d /home/supos/supos/opt/supos`

4. Set supOS language.

  `cd /home/supos/supos/opt/supos/bin`

  `cp env.sh.tmpl env.sh`

  `vim env.sh`

  <img className="medium-zoom-image" src="https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/2.jpg" />

5. Install supOS.

  `cd /home/supos/supos/opt/supos`

  `sudo bash install.sh`

6. Check the service status after installation.

  `kubectl get po`

:::info
- supOS will automatically start after installation. You can also manually start by <code>sudo bash start.sh</code> under <b>home/supos/supos/bin</b> folder. It takes at least 300 seconds to start the whole system.
- You can ONLY stop supOS system using <code>sudo bash stop.sh</code> under <b>home/supos/supos/bin</b> folder.
:::

7. Insert the authorization dongle into supOS server.
 
<!-- ## Authorization Management

The platform can authorize the dongle through a USB or an authorization file.


### Generating Authorization Files

:::warning
- The authorization file collects the server fingerprint and is bound with the current Ubuntu system and network environment.
- Reinstall the system will invalidate it, migrate the authorization before reinstalling the system. For details, see <a href="Appendix/Migrate Authorization">Migrate Authorization</a>.
:::

1. Access "http://&lt;server IP&gt;:1947" through a browser, and then log in to the authorization back-end.
2. Click the **Sentinel Keys** tab on the left, and then click **Fingerprint** to generate and download fingerprint_xxx.c2v the authorization file.

![Authorization file](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/90..png)



3. Send the file to technical support for authorization and then get the authorized .v2c file.

4. Select the **Update/Attach** tab on the left, and then click **Select File**, upload the .v2c file.

5. Check the authorization result under the **Sentinel Keys** tab.

![Authorization result](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/91.png)

### Installing Authorization Dongle

Install the authorization dongle on the server.

1. Insert the dongle into the server.
:::info
If the supOS is installed on a virtual machine, make sure the dongle can be recognized on the VM management software. For details, see the corresponding manual.
:::

4. Run `lsusb` command to list all USB devices connected to the server. <br/>
The dongle is successfully installed if the following figure shows.
![Dongle installation](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/install/92.png) -->

<!-- 
### Installing through Maintenance Platform
1. Install maintenance platform.
- Visual installation

<ol>
<ol>
<li>Get the installation package from technical support.</li>
<li>Double-click the setup.exe file, and enter the supOS server information.</li>
<li></li>
</ol>
</ol> -->

## Uninstalling supOS Platform
You can select to only delete the programme file without clearing data or delete all data when uninstalling the platform from the server.
:::info

Once you uninstall the programme, the original configuration files such as “env.sh” and “dlake.json” will be backed up and renamed to “env-xxxxxxxx.sh” and “dlake-xxxxxxxx.json” respectively. Rename them to the original names when installing the platform with the original configurations.

:::

- Uninstall supOS platform.
1. Switch to the bin directory under the supOS platform installation path.
    
      `cd /home/supos/supos/opt/supos/bin`

2. Uninstall the programme and wait for it to finish.
      
      `sudo bash uninstall.sh`

- Uninstall the programme and clear all data.

1. Switch to the bin directory under the supOS platform installation path.

      `cd /home/supos/supos/opt/supos/bin`

2. Uninstall the programme and clear all data.

      `sudo bash clean-all.sh`
