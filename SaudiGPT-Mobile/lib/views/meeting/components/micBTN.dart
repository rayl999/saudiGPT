import 'package:chatgpt_hackathon/controllers/MainController.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class MicBTN extends GetView<MainController> {
  const MicBTN({super.key});

  @override
  Widget build(BuildContext context) {
    return Obx(
      () => InkWell(
        onTap: () {
          controller.isReconding.toggle();
          // ! TODO: Start recording
          controller.askMicPermission();
        },
        child: Container(
          height: 300,
          decoration: BoxDecoration(
            color: Colors.white,
            shape: BoxShape.circle,
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.2),
                spreadRadius: 2,
                blurRadius: 5,
                offset: const Offset(0, 3),
              ),
            ],
          ),
          child: Center(
            child: Icon(
              Icons.mic,
              size: 100,
              color: controller.isReconding.isTrue ? Colors.red : Colors.grey,
              shadows: const [
                Shadow(
                  color: Colors.black,
                  blurRadius: 5,
                  offset: Offset(0, 3),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
