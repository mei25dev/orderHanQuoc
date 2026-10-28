
const stats = [
  { label: "Tổng đơn hàng", value: "128", color: "text-indigo-700" },
  { label: "Chờ mua hàng", value: "24", color: "text-amber-600" },
  { label: "Chờ thanh toán", value: "18", color: "text-rose-600" },
  { label: "Đang vận chuyển", value: "36", color: "text-emerald-600" },
];

const orders = [
  { code: "ORD-0001", customer: "Nguyễn Minh Anh", product: "Mỹ phẩm Hàn Quốc", amount: "1.250.000 ₫", status: "Chờ mua hàng" },
  { code: "ORD-0002", customer: "Trần Thu Hà", product: "Thời trang", amount: "2.480.000 ₫", status: "Đang vận chuyển" },
  { code: "ORD-0003", customer: "Lê Hoàng Nam", product: "Đồ gia dụng", amount: "860.000 ₫", status: "Chờ thanh toán" },
];

const menu = [
  "Tổng quan", "Đơn hàng", "Khách hàng", "Sản phẩm",
  "Mua hàng", "Thanh toán", "Vận chuyển", "Báo cáo", "Cài đặt",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 md:flex">
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white p-5 md:block">
        <h1 className="text-xl font-bold text-indigo-700">Order Hàn Quốc</h1>
        <p className="mb-8 mt-1 text-sm text-slate-500">Hệ thống quản lý</p>

        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Menu chính
        </p>

        <nav className="space-y-1">
          {menu.map((item, index) => (
            <a
              key={item}
              href={index === 0 ? "/" : "#"}
              className={`block rounded-lg px-3 py-2.5 text-sm ${
                index === 0
                  ? "bg-indigo-50 font-semibold text-indigo-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-8 rounded-xl bg-slate-50 p-4">
          <p className="text-sm font-semibold">Tỷ giá tham khảo</p>
          <p className="mt-2 text-lg font-bold">1 KRW = 18 ₫</p>
          <p className="mt-1 text-xs text-slate-500">Dữ liệu minh họa</p>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-5 py-5 md:px-8">
          <div>
            <p className="text-sm text-slate-500">Quản trị / Tổng quan</p>
            <h2 className="mt-1 text-2xl font-bold">Dashboard</h2>
          </div>
          <span className="rounded-full border border-slate-200 px-4 py-2 text-sm">
            Quản trị viên
          </span>
        </header>

        <div className="space-y-8 p-5 md:p-8">
          <section>
            <h3 className="text-lg font-semibold">Tình hình hoạt động</h3>
            <p className="mt-1 text-sm text-slate-500">
              Theo dõi nhanh tình trạng xử lý đơn hàng.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <article key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className={`mt-3 text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="mt-2 text-xs text-slate-400">Số liệu minh họa</p>
                </article>
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 p-5">
              <div>
                <h3 className="font-semibold">Đơn hàng gần đây</h3>
                <p className="mt-1 text-sm text-slate-500">Danh sách dữ liệu mẫu.</p>
              </div>
              <button type="button" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                + Tạo đơn hàng
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-5 py-4">Mã đơn</th>
                    <th className="px-5 py-4">Khách hàng</th>
                    <th className="px-5 py-4">Sản phẩm</th>
                    <th className="px-5 py-4">Tổng tiền</th>
                    <th className="px-5 py-4">Trạng thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.map((order) => (
                    <tr key={order.code} className="hover:bg-slate-50">
                      <td className="whitespace-nowrap px-5 py-4 font-semibold text-indigo-700">{order.code}</td>
                      <td className="whitespace-nowrap px-5 py-4">{order.customer}</td>
                      <td className="px-5 py-4">{order.product}</td>
                      <td className="whitespace-nowrap px-5 py-4 font-medium">{order.amount}</td>
                      <td className="whitespace-nowrap px-5 py-4">
                        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium">
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <p className="text-center text-xs text-slate-400">
            Order Hàn Quốc · Phiên bản giao diện ban đầu
          </p>
        </div>
      </main>
    </div>
  );
}
