FROM uhub.service.ucloud.cn/unnoo/vuepress:latest as builder
WORKDIR /app
COPY . .
RUN ls -la
RUN /app/node_modules/.bin/vuepress build -d ./dist

FROM uhub.service.ucloud.cn/unnoo/openresty:abtest2.8
COPY --from=builder /app/dist /dist
