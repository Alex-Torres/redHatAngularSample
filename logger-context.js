'use strict';

module.exports = class LoggerContext {
  constructor(logger) {
    this.logger = logger;
    this.currentCtx = null;
    this.setLoggerCtx(this.currentCtx);
  }

  record(rec) {
    this.logger.debug(rec.annotation.toString());
  }

  setLoggerCtx(ctx) {
    if (ctx) {
      this.logger.addContext('parentId', ctx.parentId ? ctx.parentId : '');
      this.logger.addContext('traceId', ctx.traceId ? ctx.traceId : '');
      this.logger.addContext('spanId', ctx.spanId ? ctx.spanId : '');
    } else {
      this.logger.addContext('parentId', '');
      this.logger.addContext('traceId', '');
      this.logger.addContext('spanId', '');
    }
  }

  setContext(ctx) {
    this.currentCtx = ctx;
    this.setLoggerCtx(ctx);
  }

  getContext() {
    return this.currentCtx;
  }

  scoped(callable) {
    const prevCtx = this.currentCtx;
    const result = callable();
    this.currentCtx = prevCtx;
    this.setLoggerCtx(this.currentCtx);
    return result;
  }

  letContext(ctx, callable) {
    return this.scoped(() => {
      this.setContext(ctx);
      this.setLoggerCtx(ctx);
      return callable();
    });
  }
};
