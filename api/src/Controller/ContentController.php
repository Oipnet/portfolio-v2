<?php

namespace App\Controller;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileNotFoundException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Response;

class ContentController
{
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * @Route("/content/{type}/{filename}-{ext}", name="show_content")
     */
    public function index2(string $type, string $filename, string $ext)
    {
        $filePath = $this->container->getParameter('dir.'.$type).'/'.$filename.'.'.$ext;

        return new BinaryFileResponse($filePath);
        /*try {
            $filePath = $this->container->getParameter('dir.'.$type).'/'.$filename.'.'.$ext;

            return new BinaryFileResponse($filePath);
        } catch (FileNotFoundException $e) {
            return new Response('File not found', 404);
        }*/

    }
}
