import React, { useState } from 'react';
import { 
  ShoppingBag, 
  X, 
  Trash2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  CreditCard,
  Building2,
  Globe2
} from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItem, onClearCart }) {
  const [paymentOption, setPaymentOption] = useState('full'); // 'full' or 'installment'
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutSuccess(true);
    }, 800);
  };

  const isEth = cartItem?.currency === 'ETB';

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-dark-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-6 bg-dark-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Enrollment Cart</h3>
                <p className="text-xs text-slate-400 font-mono">
                  {cartItem ? '1 Selected Plan' : 'Your cart is empty'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-dark-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Body */}
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            {checkoutSuccess ? (
              <div className="py-8 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Seat Reserved!</h4>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                  Your seat for the <strong>{cartItem?.name}</strong> cohort has been reserved. Please confirm your 30-minute diagnostic session below.
                </p>
                <div className="pt-2 space-y-2">
                  <a
                    href="https://calendar.app.google/NqgKSXoBhqz163hG9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Select Google Meet Slot</span>
                  </a>
                  <button
                    onClick={() => {
                      setCheckoutSuccess(false);
                      onClearCart();
                      onClose();
                    }}
                    className="text-xs text-slate-400 hover:text-white underline pt-2 block mx-auto"
                  >
                    Close Cart
                  </button>
                </div>
              </div>
            ) : cartItem ? (
              <div className="space-y-6">
                
                {/* Selected Plan Item Card */}
                <div className="p-5 rounded-2xl bg-dark-950 border border-slate-800 space-y-3 relative">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 font-bold uppercase">
                        {cartItem.badge || 'Selected Course'}
                      </span>
                      <h4 className="text-base font-bold text-white mt-1.5">{cartItem.name}</h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">32-Week AI Full-Stack Immersive</p>
                    </div>

                    <button
                      onClick={onClearCart}
                      className="text-slate-500 hover:text-red-400 transition-colors p-1"
                      title="Remove from Cart"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-baseline gap-2 pt-2 border-t border-slate-800/80">
                    <span className="text-2xl font-bold text-white font-mono">
                      ${cartItem.discountedPrice}
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      ${cartItem.originalPrice}
                    </span>
                    <span className="text-xs text-emerald-400 font-mono font-bold ml-auto">
                      {cartItem.savings}
                    </span>
                  </div>
                </div>

                {/* Cadence Selection (Full vs Installment) */}
                <div className="space-y-3">
                  <label className="text-xs font-mono text-slate-400 uppercase font-bold block">
                    Select Payment Schedule:
                  </label>

                  <div className="space-y-2">
                    <div
                      onClick={() => setPaymentOption('full')}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        paymentOption === 'full'
                          ? 'bg-dark-950 border-amber-500'
                          : 'bg-dark-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <h5 className="text-xs font-bold text-white">One-Time Full Payment</h5>
                        <p className="text-[11px] text-slate-400 font-mono">
                          ${cartItem.discountedPrice} total {isEth ? '(CBE Rate)' : 'USD'}
                        </p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentOption === 'full' ? 'bg-amber-500 border-amber-400' : 'border-slate-700'
                      }`} />
                    </div>

                    <div
                      onClick={() => setPaymentOption('installment')}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        paymentOption === 'installment'
                          ? 'bg-dark-950 border-amber-500'
                          : 'bg-dark-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <h5 className="text-xs font-bold text-white">Monthly / Phase Installments</h5>
                        <p className="text-[11px] text-amber-400 font-mono">
                          {isEth ? 'Payable Phase-by-Phase ($100-$175)' : '4 monthly installments of $425/mo'}
                        </p>
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentOption === 'installment' ? 'bg-amber-500 border-amber-400' : 'border-slate-700'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Reassurance Guarantee Note */}
                <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>No Payment Required Today</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-400">
                    Tuition is finalized during your 1-on-1 diagnostic evaluation. Reserving now locks in the promotional rate.
                  </p>
                </div>

              </div>
            ) : (
              <div className="py-12 text-center text-slate-500 space-y-3">
                <ShoppingBag className="w-12 h-12 mx-auto stroke-1" />
                <p className="text-xs">Your enrollment cart is currently empty.</p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-dark-950 border border-slate-700 text-xs text-slate-300 hover:text-white"
                >
                  Browse Available Plans
                </button>
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cartItem && !checkoutSuccess && (
            <div className="p-6 bg-dark-950 border-t border-slate-800 space-y-4">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Regular Tuition:</span>
                  <span className="line-through">${cartItem.originalPrice}</span>
                </div>
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>Promotional Discount:</span>
                  <span>-{cartItem.savings}</span>
                </div>
                <div className="flex justify-between text-white text-base font-bold pt-2 border-t border-slate-800">
                  <span>Due Today to Apply:</span>
                  <span className="text-amber-400 font-mono">$0.00 (Free)</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isProcessing}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                {isProcessing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                    <span>Reserving Seat...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm & Proceed to Diagnostic</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
