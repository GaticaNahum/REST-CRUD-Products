<?php

namespace App\Controller;

header('Access-Control-Allow-Origin: *');

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
//Json Response
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ProductsController extends AbstractController
{
    /**
     * @Route("/products", name="products")
     */
    public function findAllProducts(){
        $em = $this->getDoctrine()->getManager();

        $query = $em->createQuery('SELECT p.idproduct, p.name, p.price, p.status FROM App:Products p');
        $listProducts = $query->getResult();

        $data = [
            'status' => 404,
            'message' => 'No se encontaron resultados',
        ];
        
        if(count($listProducts) > 0){
            $data = [
                'status' => 200,
                'message' => 'Se encontraron: ' . count($listProducts) . ' resultados',
                'listProducts' => $listProducts 
            ];
        }
        return new JsonResponse($data);
    }
}
