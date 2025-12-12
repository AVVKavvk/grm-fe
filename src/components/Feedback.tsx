import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { FeedbackFormData } from "@/schema/feedbackSchema";
import { useFeedbackStore } from "@/store/feedbackStore";

interface FormErrors {
  email?: string;
  bibNo?: string;
}

const Feedback: React.FC = () => {
  const { sendFeedback } = useFeedbackStore();
  const [formData, setFormData] = useState<FeedbackFormData>({
    email: "",
    runType: "",
    bibNo: "",
    ratings: {
      overallOrganization: 0,
      registrationProcess: 0,
      communications: 0,
      courseLayout: 0,
      hydrationStation: 0,
      medicalStations: 0,
      volunteers: 0,
      raceResults: 0,
      parkingRestrooms: 0,
      directionalSigns: 0,
      safety: 0,
      raceSwag: 0,
      postRaceFood: 0,
      entertainment: 0,
    },
    recommendEvent: "",
    participateAgain: "",
    improvements: "",
    additionalComments: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const runTypes = [
    "5 kms",
    "5 km School Run",
    "10 kms",
    "10 km Corporate Run",
    "21 km",
    "32 km",
    "42 km",
  ];

  const ratingCategories = [
    { key: "overallOrganization", label: "Overall organization of Event" },
    {
      key: "registrationProcess",
      label: "Registration process (smooth and convenient?)",
    },
    {
      key: "communications",
      label:
        "Clear and timely event communications (emails, updates, instructions)",
    },
    { key: "courseLayout", label: "Course layout and marking" },
    {
      key: "hydrationStation",
      label: "Hydration Station (well stocked water and adequately spaced)",
    },
    {
      key: "medicalStations",
      label: "Route and at site First-Aid and Medical Stations",
    },
    {
      key: "volunteers",
      label: "Volunteers along the course to guide and assist",
    },
    {
      key: "raceResults",
      label: "Accuracy and timeliness of the race results",
    },
    { key: "parkingRestrooms", label: "Parking and restroom facilities" },
    {
      key: "directionalSigns",
      label: "Directional signs and maps to navigate the venue",
    },
    { key: "safety", label: "Safety on the course during the event" },
    {
      key: "raceSwag",
      label: "Quality of the race swag (T-shirts, medals, etc.)",
    },
    { key: "postRaceFood", label: "Post-race food and refreshments" },
    { key: "entertainment", label: "Entertainment (Zuma, MC and more)" },
  ];

  const ratingOptions = [
    { value: 1, label: "Very Dissatisfied" },
    { value: 2, label: "Dissatisfied" },
    { value: 3, label: "Neutral" },
    { value: 4, label: "Satisfied" },
    { value: 5, label: "Very Satisfied" },
    { value: 6, label: "No Feedback" },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.bibNo && formData.bibNo.length !== 10) {
      newErrors.bibNo = "Bib number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await sendFeedback(formData);
      if (!response) {
        throw new Error("Submission failed");
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRatingChange = (
    category: keyof typeof formData.ratings,
    value: number
  ) => {
    setFormData({
      ...formData,
      ratings: {
        ...formData.ratings,
        [category]: value,
      },
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your feedback has been successfully submitted.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                email: "",
                runType: "",
                bibNo: "",
                ratings: {
                  overallOrganization: 0,
                  registrationProcess: 0,
                  communications: 0,
                  courseLayout: 0,
                  hydrationStation: 0,
                  medicalStations: 0,
                  volunteers: 0,
                  raceResults: 0,
                  parkingRestrooms: 0,
                  directionalSigns: 0,
                  safety: 0,
                  raceSwag: 0,
                  postRaceFood: 0,
                  entertainment: 0,
                },
                recommendEvent: "",
                participateAgain: "",
                improvements: "",
                additionalComments: "",
              });
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            SKF GRM Feedback Form
          </h1>
          <p className="text-gray-600">
            Help us improve your experience by sharing your feedback
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Basic Information
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registered Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Run Type
                </label>
                <select
                  value={formData.runType}
                  onChange={(e) =>
                    setFormData({ ...formData, runType: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select run type</option>
                  {runTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bib No (10 digits)
                </label>
                <input
                  type="text"
                  value={formData.bibNo}
                  onChange={(e) =>
                    setFormData({ ...formData, bibNo: e.target.value })
                  }
                  maxLength={10}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.bibNo ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="1234567890"
                />
                {errors.bibNo && (
                  <p className="text-red-500 text-sm mt-1">{errors.bibNo}</p>
                )}
              </div>
            </div>
          </div>

          {/* Rating Table */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Event Ratings
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Category
                    </th>
                    {ratingOptions.map((option) => (
                      <th
                        key={option.value}
                        className="border border-gray-300 px-2 py-3 text-center text-xs font-medium text-gray-700"
                      >
                        <div className="flex flex-col items-center">
                          <span className="font-bold">{option.value}</span>
                          <span className="text-xs mt-1">{option.label}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ratingCategories.map((category, idx) => (
                    <tr
                      key={category.key}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700">
                        {category.label}
                      </td>
                      {ratingOptions.map((option) => (
                        <td
                          key={option.value}
                          className="border border-gray-300 px-2 py-3 text-center"
                        >
                          <input
                            type="radio"
                            name={category.key}
                            value={option.value}
                            checked={
                              formData.ratings[
                                category.key as keyof typeof formData.ratings
                              ] === option.value
                            }
                            onChange={() =>
                              handleRatingChange(
                                category.key as keyof typeof formData.ratings,
                                option.value
                              )
                            }
                            className="w-4 h-4 text-blue-600 cursor-pointer"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Yes/No Questions */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Additional Questions
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Would you recommend this event to others?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="recommendEvent"
                    value="Yes"
                    checked={formData.recommendEvent === "Yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        recommendEvent: e.target.value,
                      })
                    }
                    className="w-4 h-4 text-blue-600 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="recommendEvent"
                    value="No"
                    checked={formData.recommendEvent === "No"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        recommendEvent: e.target.value,
                      })
                    }
                    className="w-4 h-4 text-blue-600 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Would you like to participate in our marathon again?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="participateAgain"
                    value="Yes"
                    checked={formData.participateAgain === "Yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        participateAgain: e.target.value,
                      })
                    }
                    className="w-4 h-4 text-blue-600 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="participateAgain"
                    value="No"
                    checked={formData.participateAgain === "No"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        participateAgain: e.target.value,
                      })
                    }
                    className="w-4 h-4 text-blue-600 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
            </div>
          </div>

          {/* Text Areas */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What could be improved for future events?
              </label>
              <textarea
                value={formData.improvements}
                onChange={(e) =>
                  setFormData({ ...formData, improvements: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Share your suggestions..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Do you have any additional comments or suggestions?
              </label>
              <textarea
                value={formData.additionalComments}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    additionalComments: e.target.value,
                  })
                }
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any other feedback..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
