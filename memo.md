开机自启配置文件：/etc/rc.d/rc.local

*************************************
## trojan配置文件

trojan:
"local_addr": "127.0.0.1",
    "local_port": 1088,
    "remote_addr": "xsblog.club",
    "remote_port": 443,
    "password": [
        "xs135456.."
    ],

*************************************
配置文件：/usr/src/trojan/server.conf
trojan及加速脚本：wget https://github.com/V2RaySSR/Trojan/raw/master/Trojan.sh)
查看bbrplus是否启动：lsmod | grep bbr

## V2ray：

地址：45.32.1.91
端口：13322
用户id：11bd50b3-f9ae-4f55-8e90-a21b81aab52a
额外id：64

**启动**

systemctl start v2ray

**停止**

systemctl stop v2ray

**重启**

systemctl restart v2ray

**开机自启**

systemctl enable v2ray

**配置文件**

/etc/v2ray/config.json
**********************************************
## SSR

SSR配置文件：/etc/shadowsocks.json
防火墙配置：/etc/firewalld/zones/public.xml
快捷开放端口：firewall-cmd --zone=public --add-port=40896/tcp --permanent
防火墙开启/关闭/重启/查看状态：
	systemctl start/stop firewalld.service	
	firewall-cmd --state		
	firewall-cmd --reload    	
SSR重启：/etc/init.d/shadowsocks restart
nginx配置文件：/etc/nginx/nginx.conf
重启：/usr/sbin/nginx -s reload

******************************************************
## 微信号：

17771419207  xs135456..
13125020112  xs135456..
15814437664  135456..

**************************************
## QQ:

1478891070　xs135456++
2044252062  xs135456++
1480430756  xs135456..

********************************************

## nuitka打包exe命令
nuitka --standalone --mingw64 --nofollow-imports --follow-import-to=childwindows,color_list,detection,detection_gray  --show-progress --show-scons --output-dir=output_exe

--windows-disable-console

--plugin-enable=qt-plugins

## 公用github仓库
https://github.com/KeVincechen/KQ_Kuangshan.git
git@github.com:KeVincechen/KQ_Kuangshan.git

## docker 运行容器命令
docker run --rm -it --runtime=nvidia -e NVIDIA_VISIBLE_DEVICES=all beijing:test bash

## 向日葵地址

**公司电脑：**

- 识别码：273977291
- 验证码：GfDF8G

**公司服务器：**

- 识别码：377 128 479
- 验证码：129kc6

**公司UOS系统：**

- 识别码：215403864
- 验证码：6666

## 上海服务器地址

远程网关地址：220.248.49.130

端口：4433

账号：lz14
密码：Huawei@123

## 矿山服务器地址

- 堡垒机：https://vpn.chutianyun.gov.cn:10443/

  用户名：ajj.jingtf

  密码：027ajj@FMKS12345 或者 027ajj@FMKS123456

- 服务器帐号密码

  用户名：yjtgpu

  密码：yjt6yhn&UJM



## jittor测试命令

cc_path=g++-7 os_key=ubuntu-aarch64 use_mkl=0  python3 -m

- jittor.test.test_example
- jittor.test.test_cuda
- jittor.test.test_resnet

### jittor使用多显卡命令

CUDA_VISIBLE_DEVICES="1,2" mpirun -np 2 python -m jittor.test.test_resnet

## ssh连接远程映射本地

ssh -L 16006:127.0.0.1:6006 kqgis@172.16.1.149
