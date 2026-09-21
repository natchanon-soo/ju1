export const shader = /* wgsl */`
struct Uniforms {
  aspect: f32,
  yaw: f32,
  pitch: f32,
  zoom: f32
};

@group(0) @binding(0)
var<uniform> u: Uniforms;

struct VOut {
  @builtin(position) pos: vec4<f32>,
  @location(0) color: vec3<f32>
};

@vertex
fn vs(
  @location(0) pos: vec3<f32>,
  @location(1) color: vec3<f32>
) -> VOut {
  var o: VOut;

  let cy = f32(cos(u.yaw));
  let sy = f32(sin(u.yaw));
  let cp = f32(cos(u.pitch));
  let sp = f32(sin(u.pitch));

  let x = pos.x * cy - pos.z * sy;
  let z1 = pos.x * sy + pos.z * cy;

  let y = pos.y * cp - z1 * sp;
  let z = pos.y * sp + z1 * cp;

  let camZ = z + u.zoom;
  let inv = max(0.08, 1.0 / camZ);

  o.pos = vec4<f32>(
    x * inv / u.aspect,
    (y - 0.78) * inv,
    0.4 + camZ * 0.018,
    1.0
  );

  o.color = color;

  return o;
}

@fragment
fn fs(i: VOut) -> @location(0) vec4<f32> {
  return vec4<f32>(i.color, 1.0);
}
`;