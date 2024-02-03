#![no_std] pub use orig_project::*;

#[allow(improper_ctypes)]
mod fake_gsys {
    extern "C" {
        pub fn gr_reply(
            payload: *const u8,
            len: u32,
            value: *const u128,
            err_mid: *mut [u8; 36],
        );
    }
}

#[no_mangle]
extern "C" fn metahash() {
    const METAHASH: [u8; 32] = [158, 142, 179, 17, 50, 184, 77, 87, 248, 4, 18, 128, 91, 216, 165, 150, 98, 100, 247, 68, 74, 51, 66, 136, 129, 168, 54, 140, 169, 89, 117, 25];
    let mut res: [u8; 36] = [0; 36];
    unsafe {
        fake_gsys::gr_reply(
            METAHASH.as_ptr(),
            METAHASH.len() as _,
            u32::MAX as _,
            &mut res as _,
        );
    }
}
