import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col font-body min-h-screen p-6 justify-center items-center">
      <div className="mb-8 flex items-center space-x-4">
        {/* Expresso Logo */}
        <img 
          src="/expressologo.png"
          alt="Expresso Logo" 
          className="w-16 h-16 object-contain rounded-full"  // Adjust width and height as needed
        />
        
        {/* Expresso Text */}
        <h1 className="text-5xl font-bold font-heading text-EXdarkPurple">
          Expresso.      
        </h1>
      </div>

      <p className="text-lg text-EXdarkPurple mt-4 text-center">
        Public speaking made easy, made fun, and made for you!
      </p>

      <div className="mx-auto gap-8 mt-8">

              <div>
          <a href="mailto:speakexpresso@gmail.com" className="inline-block">
            <button
              className="bg-EXpink text-white py-2 px-6 rounded-md hover:bg-EXsalmon"
            >
              Get Coaching
            </button>
          </a>
        </div>
    </div>


<div className="mt-16 bg-EXlightPink py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {/* Box 1: Our Service */}
    <div className="bg-white p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-EXsalmon mb-4">Our Service</h3>
      <p className="text-EXdarkPurple">
        Expresso offers personalized public speaking coaching, interactive drills, and real-time feedback to help you build confidence and improve your communication skills.
      </p>
    </div>

    {/* Box 2: Our Mission */}
    <div className="bg-white p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-EXsalmon mb-4">Our Mission</h3>
      <p className="text-EXdarkPurple">
        We're a student-led startup on a mission to make public speaking accessible and enjoyable for everyone, transforming anxiety into confidence.
      </p>
    </div>

    {/* Box 3: Supporting Public Speaking */}
    <div className="bg-white p-8 rounded-lg">
      <h3 className="text-2xl font-semibold text-EXsalmon mb-4">How We Help</h3>
      <p className="text-EXdarkPurple">
        So far, we've helped train dozens of individuals, working with them to enhance their public speaking skills, refine their communication, and spark their passion for speech.
      </p>
    </div>
  </div>

  
</div>

      <div>
        
      <div className="py-16">
  <div className="max-w-6xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold text-EXdarkPurple mb-12">Why Expresso Works</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      <div className="bg-white p-8 rounded-lg border-2 border-EXlightOrange">
        <h3 className="text-2xl font-semibold text-EXdarkPurple mb-6">Our Experience</h3>
        <p className="text-EXdarkPurple leading-relaxed">
          Our team brings over a decade of combined experience in speech and debate. We're well-versed in events such as parliamentary debate, impromptu speaking, mock trial, and oral interpretation. We've won tournaments and earned speaker awards at the state and national level, and we're so excited to share our passion for public speaking with others.
        </p>
        <p className="text-EXdarkPurple leading-relaxed mt-6">
          We also know what it's like to have public speaking anxiety, and if you're struggling with communication, we've been in your place. We're confident that Expresso can help you learn to enjoy public speaking!
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg border-2 border-EXlightOrange">
        <h3 className="text-2xl font-semibold text-EXdarkPurple mb-6">Success Stories</h3>
        <p className="text-EXdarkPurple italic leading-relaxed">
          "Expresso's work with our mock trial team was super helpful. The steps they provided for better speaking were specific and attainable, making it very easy to follow.”
        </p>
        <p className="text-EXsalmon font-bold mt-4 mb-6">— SL, 11th Grade Student</p>

        <p className="text-EXdarkPurple italic leading-relaxed">
          "Working with Expresso has really helped me alleviate the pressure to be perfect that's often associated with public speaking and find my love for communication!”
        </p>
        <p className="text-EXsalmon font-bold mt-4 mb-6">— AJ, Student</p>

        
        <p className="text-EXdarkPurple italic leading-relaxed">
          "Getting public speaking training has pushed me to think on my feet and speak confidently even if I feel unready."
        </p>
        <p className="text-EXsalmon font-bold mt-4">— EL, 11th Grade Student</p>
      </div>
    </div>

  </div>
</div>
      </div>


    </div>
  );
};

export default App;
