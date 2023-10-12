import ModalForm from "@/components/EarlyAccess";

const EarlyAccess = () => {
  return (
    <div className="bg-gray-900 text-white p-4 container pt-32">
      <h1 className="text-3xl font-bold text-center mb-4">
        Be a Pioneer in Crafting Exclusive Virtual Memories!
      </h1>
      <p className="text-lg mb-4">
        At DreamVision, we are thrilled to offer you a unique opportunity: an
        exclusive early access that will allow you to be among the first to
        experience and shape the future of virtual memories.
      </p>
      <h2 className="text-2xl font-bold mb-2">Why Early Access?</h2>
      <p className="text-lg mb-4">
        We are committed to providing you with the best possible experience, and
        we want your input to make that happen. Your feedback and ideas will
        help us fine-tune our platform and tailor it to your needs and desires.
      </p>
      <h2 className="text-2xl font-bold mb-2">What You Can Expect:</h2>
      <ul className="list-disc list-inside text-lg mb-4">
        <li>
          Exclusive access to the most innovative features of DreamVision.
        </li>
        <li>
          The opportunity to create and enjoy personalized virtual memories.
        </li>
        <li>
          Active participation in the development and improvement of our
          platform.
        </li>
        <li>
          The satisfaction of being part of a pioneering community in the
          creation of unique experiences.
        </li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">How to Get Your Early Access:</h2>
      <p className="text-lg mb-4">
        It's simple. Sign up to join our early access list. You'll be among the
        first to receive invitations when the platform is ready for testing.
      </p>
      <ModalForm />
      <p className="text-lg mt-4">
        Don't miss the opportunity to be part of this exciting adventure! Join
        us and help bring to life the virtual memories that will make your
        travel dreams come true from the comfort of your home.
      </p>
    </div>
  );
};

export default EarlyAccess;
