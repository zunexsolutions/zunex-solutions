import { useEffect, useRef } from 'react'; import * as THREE from 'three'
export default function ThreeScene(){const ref=useRef<HTMLDivElement>(null)
useEffect(()=>{const el=ref.current!;const mobile=innerWidth<768;const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches
const r=new THREE.WebGLRenderer({alpha:true,antialias:false});r.setPixelRatio(Math.min(devicePixelRatio,1.5));r.setSize(el.clientWidth,el.clientHeight);el.appendChild(r.domElement)
const s=new THREE.Scene(),c=new THREE.PerspectiveCamera(60,el.clientWidth/el.clientHeight,.1,100);c.position.z=6
const n=mobile?120:350,p=new Float32Array(n*3).map(()=>(Math.random()-.5)*12)
const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(p,3))
const pts=new THREE.Points(g,new THREE.PointsMaterial({color:0x00bcd4,size:.04}));s.add(pts)
const ico=new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(2,1)),new THREE.LineBasicMaterial({color:0x6c63ff,transparent:true,opacity:.35}));s.add(ico)
let mx=0,my=0,id=0;const mm=(e:MouseEvent)=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5};addEventListener('mousemove',mm)
const loop=()=>{if(!reduce){ico.rotation.y+=.002;pts.rotation.y-=.0007}c.position.x+=(mx*1.2-c.position.x)*.03;c.position.y+=(-my*1.2-c.position.y)*.03;c.lookAt(0,0,0);r.render(s,c);id=requestAnimationFrame(loop)};loop()
const rs=()=>{r.setSize(el.clientWidth,el.clientHeight);c.aspect=el.clientWidth/el.clientHeight;c.updateProjectionMatrix()};addEventListener('resize',rs)
return()=>{cancelAnimationFrame(id);removeEventListener('mousemove',mm);removeEventListener('resize',rs);r.dispose();el.removeChild(r.domElement)}},[])
return <div ref={ref} className="absolute inset-0" aria-hidden="true"/>}
