#[no_mangle]
pub extern fn multiple(a: i32, b: i32) -> i32 {
  return a * b;
}

#[no_mangle]
pub extern fn addition(x: i32, y: i32) -> i32 {
  return x + y;
}