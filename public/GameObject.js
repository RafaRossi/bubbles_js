import * as THREE from 'three';

class Component
{
     constructor() {
     }
}

class Transform extends Component
{
    position = new THREE.Vector3(0, 0, 0);
    rotation = new THREE.Quaternion(0, 0, 0, 0);
    scale = new THREE.Vector3(1, 1, 1);

    constructor(position, rotation, scale) {

        super();

        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
}

class GameObject
{
    transform;
    components  = [];

    constructor(transform, components) {
        this.transform = transform;
        this.components = components;
    }

    addComponent(component)
    {
        this.components.push(component);
    }
}