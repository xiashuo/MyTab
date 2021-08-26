## nuitka打包exe命令
```shell
nuitka --standalone --mingw64 --nofollow-imports --follow-import to=childwindows,color_list,detection,detection_gray  --show-progress --show-scons --output-dir=output_exe --windows-disable-console --plugin-enable=qt-plugins
```

## docker 运行容器命令
```shell
docker run --rm -it --runtime=nvidia -e NVIDIA_VISIBLE_DEVICES=all beijing:test bash
```



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

ssh -L 16006:127.0.0.1:6006 kqgis@172.16.3.149
