export default function About() {
  return (
    <main className="flex flex-col items-center justify-center  px-10 py-6">
      <h1 className="text-4xl font-bold mb-8 text-center">About RightAway</h1>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="max-w-md flex flex-col items-center bg-french-gray shadow-2xl rounded-xl p-4">
          <h2 className="text-2xl font-bold mb-2">For Doctors</h2>
          <p className="text-lg text-center">
            Manage your schedule with ease and connect with patients seamlessly.
            Expose your availability and provide personalized care to your
            patients.
          </p>
        </div>
        <div className="max-w-md flex flex-col items-center bg-french-gray shadow-2xl rounded-xl p-4">
          <h2 className="text-2xl font-bold mb-2">For Patients</h2>
          <p className="text-lg text-center">
            Say goodbye to waiting room drama. Easily schedule appointments,
            provide essential information, and receive timely care from your
            trusted healthcare providers.
          </p>
        </div>
      </div>
      <div className="mt-10 max-w-2xl">
        <p className="text-lg text-center">
          At RightAway, we are committed to revolutionizing the healthcare
          experience. Our platform offers a seamless way for doctors and
          patients to connect, ensuring efficient appointment scheduling and
          personalized care.
        </p>
        <p className="mt-6 text-lg text-center">
          With RightAway, you can trust that your healthcare needs are in good
          hands. Join us on our journey to redefine healthcare delivery.
        </p>
      </div>
    </main>
  );
}
