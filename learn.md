# nest.js 学习

## 搭建
```bash
npm i -g @nestjs/cli
nest new admin-server

# 启动
pnpm start
```

### 利用CLI生成代码
```bash
# 生成 Module
nest g mo xxx 

# 生成 Controller
nest g co xxx

# 生成 Service
nest g s xxx

# 生成一套Restful风格接口
nest g resource xxx
```

## Swagger文档
```bash
pnpm i @nestjs/swagger
```

## 调用流程
- controller层 -> service层 -> module层