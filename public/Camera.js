import { Component } from "three/addons/libs/ecsy.module.js";
import * as THREE from "three";

class Camera extends Component
{
    fieldOfView = 70.0;
    aspectRatio = window.innerWidth / window.innerHeight;
    nearClipPlane = 0.1;
    farClipPlane = 1000;

    camera;

    constructor(fieldOfView = 70.0, aspectRatio = window.innerWidth / window.innerHeight, nearClipPlane = 0.1, farClipPlane = 1000){

        super()

        this.fieldOfView = fieldOfView;
        this.aspectRatio = aspectRatio;
        this.nearClipPlane = nearClipPlane;
        this.farClipPlane = farClipPlane;

        this.camera = new THREE.PerspectiveCamera(this.fieldOfView, this.aspectRatio, this.nearClipPlane, this.farClipPlane);
    }
}