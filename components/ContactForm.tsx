"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Paperclip, FileText, X, Upload } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [messageLength, setMessageLength] = useState(0);
  const MAX_MESSAGE_LENGTH = 1000;

  const allowedExtensions = ["txt", "docx", "doc", "csv", "xlsx", "xls", "pdf", "rtf", "odt"];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setErrorMsg("");

    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Check size (2 MB limit)
    if (file.size > 2 * 1024 * 1024) {
      setErrorMsg("File size must not exceed 2 MB.");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Check type
    const ext = file.name.split(".").pop()?.toLowerCase() || "";
    if (!allowedExtensions.includes(ext)) {
      setErrorMsg("Invalid format. Only documents are supported (txt, pdf, docx, xlsx, csv, etc.).");
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setSelectedFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    try {
      // Send directly as FormData (browser auto-applies correct boundary headers for multipart/form-data)
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to send message. Please try again.");
      }

      setIsSuccess(true);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-surface border border-border p-6 sm:p-10 rounded-3xl shadow-xl">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-display font-semibold text-foreground mb-4">Message Received</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              We'll review your details and get back to you within 24 hours to discuss the next steps.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {errorMsg && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl flex items-center gap-3 text-red-400 text-sm font-medium">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full bg-background border border-border rounded-[1.25rem] px-4 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium text-foreground">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full bg-background border border-border rounded-[1.25rem] px-4 py-3.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none"
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((service) => (
                    <option key={service.number} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-foreground">Estimated Budget</label>
                <input
                  id="budget"
                  name="budget"
                  type="text"
                  placeholder="e.g. $500 - $1000 or Flexible"
                  className="w-full bg-background border border-border rounded-[1.25rem] px-4 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Project Details</label>
                <span className={`text-xs tabular-nums transition-colors ${
                  messageLength > MAX_MESSAGE_LENGTH ? 'text-red-400 font-semibold' : 'text-muted-foreground'
                }`}>
                  {messageLength} / {MAX_MESSAGE_LENGTH}
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={MAX_MESSAGE_LENGTH}
                onChange={(e) => setMessageLength(e.target.value.length)}
                placeholder="Tell us about your goals, current stack, and timeline..."
                className={`w-full bg-background border rounded-[1.25rem] px-4 py-3.5 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none ${
                  messageLength > MAX_MESSAGE_LENGTH ? 'border-red-400' : 'border-border'
                }`}
              />
            </div>

            {/* Custom File Attachment Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Attach Document <span className="text-muted-foreground font-normal">(Optional)</span></label>
              <input
                ref={fileInputRef}
                type="file"
                name="attachment"
                accept=".txt,.doc,.docx,.csv,.xls,.xlsx,.pdf,.rtf"
                onChange={handleFileChange}
                className="hidden"
              />

              {!selectedFile ? (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-background/60 hover:bg-background border border-dashed border-border hover:border-primary/60 rounded-xl p-6 flex flex-col items-center justify-center gap-2 text-center transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center group-hover:scale-105 group-hover:border-primary/50 transition-all">
                    <Upload className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    Click to attach a file <span className="text-primary font-semibold">or browse</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Supports txt, docx, csv, xlsx, pdf (Max size: 2 MB)
                  </div>
                </button>
              ) : (
                <div className="w-full bg-background border border-border/80 rounded-xl p-4 flex items-center justify-between gap-3 animate-in fade-in zoom-in-95 duration-200">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm font-medium text-foreground truncate">{selectedFile.name}</p>
                      <p className="text-xs text-muted-foreground">{formatFileSize(selectedFile.size)}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-2 hover:bg-destructive/10 rounded-lg text-muted-foreground hover:text-red-400 transition-colors"
                    title="Remove attachment"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-primary text-primary-foreground font-extrabold text-[15px] py-4 rounded-[1.5rem] flex items-center justify-center gap-2 shadow-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
