const Profile = () => {
  return (
    <div className="my-8 flex items-center justify-center">
      <div className="p-6 shadow-lg">
        <div className="flex flex-wrap gap-4">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">Name</h4>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-4">
            <h4 className="text-xl font-bold sm:text-2xl md:text-3xl">Email</h4>
            <p className="text-lg">Email</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button className="btn btn-outline btn-info">Verify email</button>

          {/* The button to open modal */}
          <label htmlFor="my-modal-6" className="btn btn-outline btn-success">
            Update profile
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <div className="">
                <label htmlFor="name" className="text-lg font-bold block mb-2" >Update Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder=""
                  className="input input-bordered input-info w-full max-w-xs"
                />
              </div>
              <div className="mt-8">
                <label htmlFor="imageUrl" className="text-lg font-bold block mb-2" >Image Url </label>
                <input
                  type="text"
                  id="imageUrl"
                  placeholder=""
                  className="input input-bordered input-info w-full max-w-xs"
                />
              </div>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn btn-success">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
