import 'package:flutter/material.dart';
import 'package:get/get.dart';

const labelColors = [
  Color(0xFF11B5E9),
  Color(0xFFA411E9),
  Color(0xFFE91179),
];

class TaskCard extends StatelessWidget {
  const TaskCard({super.key, required this.taskData});
  final Map taskData;
  @override
  Widget build(BuildContext context) {
    return Container(
      width: Get.width,
      height: 40,
      padding: const EdgeInsets.symmetric(horizontal: 20),
      decoration: BoxDecoration(
        color: labelColors[int.parse(taskData["label"])],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            taskData["title"],
            style: const TextStyle(
              color: Colors.white,
              fontSize: 18,
            ),
          ),
        ],
      ),
    );
  }
}
