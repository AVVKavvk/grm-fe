import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { Building2, Mail, Phone, Globe, Trophy, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useEmailStore } from "@/store/emailStore";

const sponsorshipSchema = z.object({
  companyName: z.string().min(2).max(100),
  contactPerson: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(10).max(15),
  website: z.string().optional().or(z.literal("")),
  sponsorshipCategories: z
    .array(z.string())
    .min(1, "Please select at least one category"),
  amountRange: z.string().optional(),
  additionalInfo: z.string().max(1000).optional(),
  otherCategory: z.string().optional(),
});

type SponsorshipFormData = z.infer<typeof sponsorshipSchema>;

const sponsorshipCategories = [
  "Associate Sponsor",
  "Hydration Partner",
  "Energy Drink Partner",
  "Medical Partner",
  "Fitness Festival Sponsor",
  "Pasta Party Sponsor",
  "Corporate Trophy Partner",
  "Mascot Sponsor",
  "Other",
];

const amountRanges = [
  "Below ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000+",
];

/* ── Reusable styled input ── */
const fieldClass =
  "w-full bg-[#0B1E3D] border border-white/[0.12] rounded-[8px] px-4 py-3 " +
  "font-['Open_Sans'] text-sm text-white placeholder:text-white/30 " +
  "focus:outline-none focus:border-[#1A6FB4] focus:ring-1 focus:ring-[#1A6FB4]/40 transition-colors";

/* ── Section sub-heading ── */
const SectionHeading = ({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) => (
  <div className="flex items-center gap-2 mb-5 pb-3 border-b border-white/[0.08]">
    <div className="w-8 h-8 rounded-[8px] bg-[#1A6FB4]/20 flex items-center justify-center">
      <Icon className="w-4 h-4 text-[#5BB8F5]" />
    </div>
    <h3 className="font-['Montserrat'] text-[0.85rem] font-bold uppercase tracking-[0.10em] text-white">
      {label}
    </h3>
  </div>
);

const Sponsorship = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showOtherField, setShowOtherField] = useState(false);
  const { toast } = useToast();
  const { sendEmail } = useEmailStore();

  const form = useForm<SponsorshipFormData>({
    resolver: zodResolver(sponsorshipSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      website: "",
      sponsorshipCategories: [],
      amountRange: "",
      additionalInfo: "",
      otherCategory: "",
    },
  });

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updated = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter((c) => c !== category);
    setSelectedCategories(updated);
    setShowOtherField(updated.includes("Other"));
    form.setValue("sponsorshipCategories", updated);
  };

  const formatEmailBody = (data: SponsorshipFormData) => {
    const categories = data.sponsorshipCategories.join(", ");
    return `New Sponsorship Request — SKF Goa River Marathon

Company: ${data.companyName}
Contact: ${data.contactPerson}
Email: ${data.email}
Phone: ${data.phone}${data.website ? `\nWebsite: ${data.website}` : ""}

Categories: ${categories}${data.otherCategory ? `\nOther: ${data.otherCategory}` : ""}
Budget: ${data.amountRange}${data.additionalInfo ? `\n\nMessage:\n${data.additionalInfo}` : ""}`;
  };

  const onSubmit = async (data: SponsorshipFormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendEmail({
        client_email:
          import.meta.env.VITE_DEFAULT_EMAIL || "runnersingoa@gmail.com",
        subject: `Sponsorship Request from ${data.companyName}`,
        body: formatEmailBody(data),
      });
      if (result) {
        toast({
          title: "Request received!",
          description: "We'll get back to you within 2–3 business days.",
        });
        form.reset();
        setSelectedCategories([]);
        setShowOtherField(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1E3D] py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 bg-[#F47B20]/15 border border-[#F47B20]/30
                          text-[#FF9748] px-4 py-1.5 rounded-full mb-5"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span className="font-['Montserrat'] text-[0.68rem] font-bold tracking-[0.16em] uppercase">
              Sponsorship Opportunities
            </span>
          </div>
          <h1 className="font-['Montserrat'] text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-4">
            Partner With <span className="text-[#F47B20]">GRM</span>
          </h1>
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#1A6FB4] to-[#5BB8F5] rounded-full mx-auto mb-5" />
          <p className="font-['Open_Sans'] text-base text-white/55 max-w-lg mx-auto leading-relaxed">
            Support the Marathon and showcase your brand. Fill out the form
            below to express your interest in sponsoring one or more of our
            exciting events and activities.
          </p>
        </div>

        {/* ── Form card ── */}
        <div className="bg-[#122B55] border border-white/[0.08] rounded-[16px] p-8">
          {/* Card header */}
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/[0.08]">
            <div className="w-10 h-10 rounded-[10px] bg-[#F47B20]/15 flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#FF9748]" />
            </div>
            <div>
              <h2 className="font-['Montserrat'] text-base font-bold text-white">
                Sponsorship Request Form
              </h2>
              <p className="font-['Open_Sans'] text-[0.75rem] text-white/45 mt-0.5">
                Let us know how you'd like to partner with us.
              </p>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* ── Company Info ── */}
              <div>
                <SectionHeading icon={Building2} label="Company Information" />
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.10em] uppercase text-white/60">
                            Company Name *
                          </FormLabel>
                          <FormControl>
                            <input
                              className={fieldClass}
                              placeholder="Your company name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[#FF9748] text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contactPerson"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.10em] uppercase text-white/60">
                            Contact Person *
                          </FormLabel>
                          <FormControl>
                            <input
                              className={fieldClass}
                              placeholder="Full name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[#FF9748] text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.10em] uppercase text-white/60 flex items-center gap-1">
                            <Mail className="w-3 h-3" /> Email *
                          </FormLabel>
                          <FormControl>
                            <input
                              type="email"
                              className={fieldClass}
                              placeholder="company@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[#FF9748] text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.10em] uppercase text-white/60 flex items-center gap-1">
                            <Phone className="w-3 h-3" /> Phone *
                          </FormLabel>
                          <FormControl>
                            <input
                              className={fieldClass}
                              placeholder="+91 XXXXX XXXXX"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[#FF9748] text-xs" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.10em] uppercase text-white/60 flex items-center gap-1">
                          <Globe className="w-3 h-3" /> Website / Social Media
                        </FormLabel>
                        <FormControl>
                          <input
                            className={fieldClass}
                            placeholder="https://www.yourcompany.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-[#FF9748] text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* ── Sponsorship Categories ── */}
              <div>
                <SectionHeading icon={Trophy} label="Sponsorship Categories" />
                <p className="font-['Open_Sans'] text-[0.78rem] text-white/45 mb-4">
                  Select all categories you're interested in sponsoring:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {sponsorshipCategories.map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <Checkbox
                        id={cat}
                        checked={selectedCategories.includes(cat)}
                        onCheckedChange={(checked) =>
                          handleCategoryChange(cat, checked as boolean)
                        }
                        className="border-white/20 data-[state=checked]:bg-[#1A6FB4] data-[state=checked]:border-[#1A6FB4]"
                      />
                      <span className="font-['Open_Sans'] text-[0.82rem] text-white/65 group-hover:text-white transition-colors">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>

                {showOtherField && (
                  <div className="mt-4">
                    <FormField
                      control={form.control}
                      name="otherCategory"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.10em] uppercase text-white/60">
                            Please specify
                          </FormLabel>
                          <FormControl>
                            <input
                              className={fieldClass}
                              placeholder="Describe your sponsorship interest..."
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {form.formState.errors.sponsorshipCategories && (
                  <p className="text-[#FF9748] text-xs mt-2">
                    {form.formState.errors.sponsorshipCategories.message}
                  </p>
                )}
              </div>

              {/* ── Budget Range ── */}
              <div>
                <FormField
                  control={form.control}
                  name="amountRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.10em] uppercase text-white/60">
                        Sponsorship Budget Range
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[#0B1E3D] border-white/[0.12] text-white rounded-[8px] focus:ring-[#1A6FB4]/40 focus:border-[#1A6FB4]">
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#122B55] border-white/[0.12]">
                          {amountRanges.map((range) => (
                            <SelectItem
                              key={range}
                              value={range}
                              className="text-white/75 focus:bg-[#1A6FB4]/20 focus:text-white"
                            >
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-[#FF9748] text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              {/* ── Additional Info ── */}
              <div>
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-['Montserrat'] text-[0.72rem] font-bold tracking-[0.10em] uppercase text-white/60">
                        Additional Information
                      </FormLabel>
                      <FormControl>
                        <textarea
                          rows={4}
                          className={`${fieldClass} resize-none`}
                          placeholder="Tell us more about your sponsorship goals, specific requirements, or any questions..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-[#FF9748] text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              {/* ── Submit ── */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-['Montserrat'] text-[0.82rem] font-bold tracking-[0.10em] uppercase
                           bg-[#F47B20] hover:bg-[#FF9748] disabled:opacity-50 disabled:cursor-not-allowed
                           text-white py-4 rounded-[8px] transition-colors duration-200
                           shadow-[0_4px_14px_rgba(244,123,32,0.35)] hover:shadow-[0_6px_20px_rgba(244,123,32,0.5)]"
              >
                {isSubmitting ? "Submitting…" : "Submit Sponsorship Request →"}
              </button>
            </form>
          </Form>
        </div>

        {/* ── Footer note ── */}
        <div className="mt-8 text-center space-y-1">
          <p className="font-['Open_Sans']  text-white/35">
            Our team will review your request and contact you within 2–3
            business days.
          </p>
          <p className="font-['Open_Sans'] text-white/35">
            Urgent inquiries:{" "}
            <a
              href="mailto:runnersingoa@gmail.com"
              className="text-[#5BB8F5] hover:text-white transition-colors"
            >
              runnersingoa@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
