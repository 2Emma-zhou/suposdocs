You can migrate supOS authorization file from one server to another in about 10 minites.

## Preparation

✅Migration tool: license-tool.tgz<br/>
✅Original server from which you want to migrate the authorization<br/>
✅Target server to which you want to migrate the authorization<br/>

## Migration Process
### Getting Fingerprint File
Get fingerprint file from the target server.
1. Move the license-tool.tgz file to the target server. For example, under the directory ***/home**.
```
cp xxx/license-tool.tgz /home
```
2. Decompress the file.
```
cd /home
tar xvf license-tool.tgz
```
3. Enter the decompressed file directory, and then start the license tool
```
cd license-tool
bash start.sh
```
4. Enter **r** from the provided options, and then press Enter to get the migration fingerprint file.

### Generating Migration Authorization File
1. Move the license-tool.tgz file to the original server. For example, under the directory **/home**.
```
cp xxx/license-tool.tgz /home
```
2. Decompress the file.
```
cd /home
tar xvf license-tool.tgz
```
3. Enter the decompressed file directory, and then start the license tool
```
cd license-tool
bash start.sh
```
4. Enter **t** from the provided options, and then enter the key ID of the athorization.

:::tip
You can check the ID on the **Sentinal Keys** tab on **https://supOS IP:1947**.
:::
5. Press Enter and then enter the path where the fingerprint file is located according to on-screen instructions.
6. Press Enter to generate the authorization migration file.
:::info
Once the migration file is generated, the authorization on the original server becomes invalid.
:::

### Uploading Authorization File
Upload the generated authorization file to a server where the supOS platform is installed or where a Ubuntu system is installed that can connect with supOS.

1. Enter https://&lt;supOS IP&gt;:1947 on a browser to log in to the authorization backend.
2. Select **Update/Attach** tab, and then click **Choose File**.
![](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/platform/83.png)
3. Select the authorization file and then upload it.
4. Under **Sentinal Keys** tab, check the authorization result.
![](https://wordpressfreezonex.oss-accelerate.aliyuncs.com/platform/84.png)
