# Antigravity Workspace Rules & Persona Guidelines (PFO 3D Scrollytelling)

## 👤 User Profile & Communication Guidelines
- **User Name:** Sadman Sakib (সাদমান সাকিব ভাই).
- **Profession:** Software Engineer (Backend Developer).
- **Communication Language:** বাংলা (বাংলা ফন্ট ও শুদ্ধ বাংলা ব্যাকরণ বাধ্যতামূলক)। রোমানাইজড বাংলিশ পরিহার করতে হবে।
- **Explanation Paradigm:** যেকোনো সিদ্ধান্ত, আর্কিটেকচার বা প্রশ্নের উত্তরে অবশ্যই **"কী" (What)**, **"কেন" (Why)** এবং **"কীভাবে" (How)** বিস্তারিত যৌক্তিক ব্যাখ্যা দিতে হবে।

---

## 🔒 Strict Operating Principles (কঠোর কাজের নিয়মাবলী)
1. **Chapter-by-Chapter Sequential Progression:**
   - প্রজেক্টের প্রতিটি কাজ চ্যাপ্টার অনুযায়ী ক্রমানুসারে হবে।
   - চ্যাপ্টার X সম্পূর্ণ শেষ না করে এবং ইউজারের স্পষ্ট লিখিত সম্মতি ("Proceed") ছাড়া কখনো চ্যাপ্টার X+1 এ যাওয়া যাবে না।
2. **Zero Unauthorized File Writes:**
   - ইউজারের অনুমতি ছাড়া কোনো কোড ফাইল, কনফিগ বা কম্পোনেন্ট সরাসরি লেখা বা পরিবর্তন করা যাবে না।
3. **Accountability & Single Source of Truth:**
   - প্রতি চ্যাপ্টার শেষে `PROJECT_MEMORY.md` ফাইলে প্রজেক্টের স্টেট, গৃহীত সিদ্ধান্ত এবং পরবর্তী লক্ষ্য আপডেট করতে হবে।
4. **Git Commit Checkpoints:**
   - প্রতিটি চ্যাপ্টারের কাজ সফলভাবে সম্পন্ন হলে প্রপার কনভেনশনাল কমিট মেসেজ দিয়ে গিট কমিট ও পুশ নিশ্চিত করতে হবে।

---

## 💻 Tech Stack Constraints
- **Framework:** Next.js (Latest App Router, TypeScript)
- **3D Engine:** Three.js / React Three Fiber (`@react-three/fiber`, `@react-three/drei`)
- **Animation & Scrollytelling:** GSAP ScrollTrigger + Lenis Smooth Scroll
- **Styling:** Tailwind CSS (Modern Glassmorphic & Organic Palette)
- **Audio:** Web Audio API (Ambient Nature Soundscape + Scroll Feedback)
- **SSR Handling:** Dynamic Import with `{ ssr: false }` for all 3D canvas components to prevent WebGL hydration mismatches.

---

## 🎨 Asset & Prompt Engineering Standards
- অ্যাসেটের মান হতে হবে স্টুডিও-গ্রেড (সিনেমাটিক আলো, ৮K টেক্সচার, সাব-সারফেস স্ক্যাটারিং, রিয়েলিজম)।
- প্রম্পট ইঞ্জিনিয়ারিংয়ের সময় ক্যামেরা লেন্স (Macro 85mm, Anamorphic), লাইটিং (Golden Hour rim light, cinematic studio), এবং কালার গ্রেডিং সুনির্দিষ্ট করতে হবে।

---

## 🏛️ Vibe Engineering & Anti-AI Design Laws (কঠোর ফ্রন্টএন্ড কোয়ালিটি)
1. **No "Lazy Vibe Coding" — Vibe Engineering Only:**
   - কোনো কাজ বা ডিজাইন যেন "এআই-জেনারেটেড" বা টেমপ্লেট না লাগে।
   - সস্তা স্পার্কল/তারা আইকন (`✨`), সাধারণ গোল পিল ব্যাজ ("The King of Fruits..."), বা ক্লিশে এআই কার্ড ডিজাইন সম্পূর্ণ নিষিদ্ধ।
2. **Editorial Luxury & Authentic Craftsmanship:**
   - প্রতিটি সেকশন আন্তর্জাতিক লাক্সারি আর্ট ডিরেকশন (যেমন: Apple, Aesop, Kinfolk) অনুযায়ী এডিটরিয়াল গ্রেডে ডিজাইন করতে হবে।
   - টাইপোগ্রাফিতে ৩টি স্তরের পারফেক্ট পেয়ারিং থাকবে:
     * Display Serif: `Cormorant Garamond` (আভিজাত্য ও রাজকীয় ঐতিহ্য)
     * Modern Sans: `Plus Jakarta Sans` (ক্লিন ও মার্জিত ইউআই)
     * Scientific Mono: `JetBrains Mono` (ল্যাবরেটরি টেস্টেড Bio-HUD নির্ভুলতা)
3. **Typography & Layout Authority:**
   - রিয়েল আর্ট মেটাডাটা (যেমন: ভৌগোলিক স্থানাঙ্ক `LAT 24.37° N`, হার্ভেস্ট রিজার্ভ নং, বা ব্যাচ কোড) ব্যবহার করে সাইটটিকে ১০০% বাস্তব ও বিশ্বাসযোগ্য প্ল্যাটফর্ম হিসেবে তৈরি করতে হবে।
