import React from "react";

const AddProduct:React.FC =()=>{
  return (
    <section className="block mb-8">
      <div className="block border-b border-b-secondary-100 pb-3">
        <h5 className="block font-iranBlack text-2xl text-text">
          افزودن محصول{" "}
        </h5>
      </div>
      <form action="#" className="block mt-4 font-iranMedium text-md font-bold">
        <div className="flex gap-4 mb-3">
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              نام محصول
            </label>
            <input
              type="text"
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              قیمت
            </label>
            <input
              type="text"
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
        </div>
        <div className="block w-full mb-3">
          <label htmlFor="" className="font-iranMedium text-md">
            توضیحات کوتاه
          </label>
          <input
            type="text"
            className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
          />
        </div>
        <div className="block w-full mb-3">
          <label htmlFor="" className="font-iranMedium text-md">
            توضیحات
          </label>
          <input
            type="text"
            className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
          />
        </div>
        <div className="flex gap-4 mb-3">
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              نام محصول
            </label>
            <input
              type="text"
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              دسته بندی
            </label>
            <select
              name=""
              id=""
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            >
              <option value="">قهوه عربیکا</option>
              <option value="">قهوه روبوستا</option>
              <option value="">قهوه ترکیبی</option>
              <option value="">قهوه ترک</option>
              <option value="">قهوه فوری</option>
              <option value="">چای و دمنوش</option>
              <option value="">ابزارت قهوه</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4 mb-3">
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              توصیف{" "}
            </label>
            <input
              type="text"
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              ترکیب
            </label>
            <input
              type="text"
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              تلخی
            </label>
            <input
              type="text"
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              مزه
            </label>
            <input
              type="text"
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
        </div>
        <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              عکس ها محصول
            </label>
            <input
              type="file"
              className="flex justify-center items-center text-center w-full h-10 border border-secondary-100 rounded-lg bg-secondary-100"
            />
          </div>
          <button className="btn_primary w-full mt-4">ثبت</button>
      </form>
    </section>
  );
}

export default AddProduct;
