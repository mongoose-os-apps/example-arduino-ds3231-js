#include "mgos.h"

const char *update_time(void) {
  time_t now = time(NULL);
  struct tm *t = localtime(&now);
  static char buf[128];
  struct json_out jsout = JSON_OUT_BUF(buf, sizeof(buf));
  json_printf(&jsout, "{year:%d,month:%d,day:%d,hour:%d,minute:%d,second:%d}",
              t->tm_year - 100, t->tm_mon + 1, t->tm_mday, t->tm_hour,
              t->tm_min, t->tm_sec);
  return buf;
}
