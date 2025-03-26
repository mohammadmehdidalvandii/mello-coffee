"use client"
import { showAlert } from "@/utils/helper";
import { describe } from "node:test";
import React, { useState, FormEvent } from "react";

const AddProduct: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [main_description, setMain_description] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState<string>("");
  const [explain, setExplain] = useState<string>("");
  const [compound, setCompound] = useState<string>("");
  const [bitterness, setBitterness] = useState<string>("");
  const [taste, setTaste] = useState<string>("");

  const handlerAddProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    
    formData.append('name', name);
    formData.append("main_description", main_description);
    formData.append("description", description);
    formData.append("price", price);
    if (image) {
      formData.append("image", image);
    }
    formData.append("category", category);
    formData.append("explain", explain);
    formData.append("compound", compound);
    formData.append("bitterness", bitterness);
    formData.append("taste", taste);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (res.status === 201) {
        swal({
          title:"محصول با موفقیت اضافه شد",
          icon:"success",
          buttons:"متوجه شدم"
        }).then(()=>{
          window.location.reload();
        })
      } else if (res.status === 422 || res.status === 419) {
        showAlert("اطلاعات وارد شد صحیح نمیباشد","error","تلاش مجدد")
      }
    } catch (error) {
      showAlert("با خطا مواجه شدید دوباره تلاش کنید","error","تلاش مجدد")
    }
  };

  return (
    <section className="block mb-8">
      <div className="block border-b border-b-secondary-100 pb-3">
        <h5 className="block font-iranBlack text-2xl text-text">
          افزودن محصول{" "}
        </h5>
      </div>
      <form onSubmit={handlerAddProduct} className="block mt-4 font-iranMedium text-md font-bold">
        <div className="flex gap-4 mb-3">
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              نام محصول
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              قیمت
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
            value={main_description}
            onChange={(e) => setMain_description(e.target.value)}
            className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
          />
        </div>
        <div className="block w-full mb-3">
          <label htmlFor="" className="font-iranMedium text-md">
            توضیحات
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
          />
        </div>
        <div className="flex gap-4 mb-3">
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              دسته بندی
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            >
              <option value="arabica">انتخاب دسته بندی</option>
              <option value="arabica">قهوه عربیکا</option>
              <option value="robusta">قهوه روبوستا</option>
              <option value="coffee-compound">قهوه ترکیبی</option>
              <option value="turkish">قهوه ترک</option>
              <option value="fast-coffee">قهوه فوری</option>
              <option value="tea">چای و دمنوش</option>
              <option value="tools-coffee">ابزارت قهوه</option>
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
              value={explain}
              onChange={(e) => setExplain(e.target.value)}
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              ترکیب
            </label>
            <input
              type="text"
              value={compound}
              onChange={(e) => setCompound(e.target.value)}
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              تلخی
            </label>
            <input
              type="text"
              value={bitterness}
              onChange={(e) => setBitterness(e.target.value)}
              className="block w-full h-10 border border-secondary-100 rounded-lg px-2 outline-none"
            />
          </div>
          <div className="block w-full">
            <label htmlFor="" className="font-iranMedium text-md">
              مزه
            </label>
            <input
              type="text"
              value={taste}
              onChange={(e) => setTaste(e.target.value)}
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
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImage(e.target.files[0]);
                }
              }}
              className="flex justify-center items-center text-center w-full h-10 border border-secondary-100 rounded-lg bg-secondary-100"
            />
          </div>
          <button className="btn_primary w-full mt-4" type="submit">ثبت</button>
      </form>
    </section>
  );
}

export default AddProduct;
