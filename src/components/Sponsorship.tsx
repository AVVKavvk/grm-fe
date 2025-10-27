import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Building2, Mail, Phone, Globe, Trophy, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useEmailStore } from "@/store/emailStore";

const sponsorshipSchema = z.object({
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  contactPerson: z
    .string()
    .min(2, "Contact person name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits"),
  website: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  sponsorshipCategories: z
    .array(z.string())
    .min(1, "Please select at least one sponsorship category"),
  amountRange: z.string().min(1, "Please select an amount range"),
  additionalInfo: z
    .string()
    .max(1000, "Message must be less than 1000 characters")
    .optional(),
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
    let updatedCategories;
    if (checked) {
      updatedCategories = [...selectedCategories, category];
    } else {
      updatedCategories = selectedCategories.filter((c) => c !== category);
    }

    setSelectedCategories(updatedCategories);
    setShowOtherField(updatedCategories.includes("Other"));
    form.setValue("sponsorshipCategories", updatedCategories);
  };

  const formatEmailBody = (data: SponsorshipFormData) => {
    const categories = data.sponsorshipCategories.join(", ");
    const otherCategoryText = data.otherCategory
      ? `\nOther Category Details: ${data.otherCategory}`
      : "";
    const websiteText = data.website ? `\nWebsite: ${data.website}` : "";
    const additionalInfoText = data.additionalInfo
      ? `\n\nAdditional Information:\n${data.additionalInfo}`
      : "";

    return `New Sponsorship Request for SKF Goa River Marathon

Company Information:
- Company Name: ${data.companyName}
- Contact Person: ${data.contactPerson}
- Email: ${data.email}
- Phone: ${data.phone}${websiteText}

Sponsorship Details:
- Categories: ${categories}${otherCategoryText}
- Budget Range: ${data.amountRange}${additionalInfoText}

---
This email was automatically generated from the SKF Goa River Marathon sponsorship form.`;
  };

  const onSubmit = async (data: SponsorshipFormData) => {
    setIsSubmitting(true);

    try {
      // Format the email data
      const emailData = {
        client_email:
          import.meta.env.VITE_DEFAULT_EMAIL ||
          "support@skfgoarivermarathon.com",
        subject: `Sponsorship Request from ${data.companyName} - SKF Goa River Marathon`,
        body: formatEmailBody(data),
      };

      // Send email
      const result = await sendEmail(emailData);

      if (result) {
        toast({
          title: "Thank you for your interest!",
          description:
            "We've received your sponsorship request and will get back to you within 2-3 business days.",
        });

        // Reset form
        form.reset();
        setSelectedCategories([]);
        setShowOtherField(false);
      } else {
        toast({
          title: "Submission Error",
          description:
            "Failed to submit your sponsorship request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Sponsorship submission error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            <Trophy className="h-3 w-3 mr-1" />
            Sponsorship Opportunities
          </Badge>
          <h1 className="text-3xl font-bold mb-4">
            Partner with SKF Goa River Marathon
          </h1>
          <p className="text-muted-foreground text-lg">
            Support the Marathon and showcase your brand! Fill out the form
            below to express your interest in sponsoring one or more of our
            exciting events and activities.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Sponsorship Request Form
            </CardTitle>
            <CardDescription>
              Let us know how you'd like to partner with us to make this
              marathon even more spectacular.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Company Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contactPerson"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Person Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} />
                          </FormControl>
                          <FormMessage />
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
                          <FormLabel className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="company@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            Phone Number *
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="+91 XXXXX XXXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <Globe className="h-3 w-3" />
                          Official Website / Social Media Link
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://www.yourcompany.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Sponsorship Categories */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Sponsorship Categories *
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Select all categories you're interested in sponsoring:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {sponsorshipCategories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) =>
                            handleCategoryChange(category, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={category}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>

                  {showOtherField && (
                    <FormField
                      control={form.control}
                      name="otherCategory"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Please specify other category:</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Describe your sponsorship interest..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {form.formState.errors.sponsorshipCategories && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.sponsorshipCategories.message}
                    </p>
                  )}
                </div>

                {/* Amount Range */}
                <FormField
                  control={form.control}
                  name="amountRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sponsorship Amount Range *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {amountRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Additional Information */}
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information / Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your sponsorship goals, specific requirements, or any questions you have..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Sponsorship Request"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Our team will review your request and contact you within 2-3
            business days.
          </p>
          <p>
            For urgent inquiries, please contact us directly at{" "}
            <span className="text-primary">sponsors@goarivermarathon.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
