export async function miapi(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx

  const { codigo } = params

  ctx.body = "<img src='https://httpstatusdogs.com/img/"+ codigo +".jpg' />"
  next()
}
